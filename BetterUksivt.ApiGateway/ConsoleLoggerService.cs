using HtmlAgilityPack;
using iText.Kernel.Pdf.Canvas.Parser.Listener;
using iText.Kernel.Pdf.Canvas.Parser;
using iText.Kernel.Pdf;
using iText.Layout.Element;

namespace BetterUksivt.ApiGateway
{
    public class ConsoleLoggerService : BackgroundService
    {
        private readonly ILogger<ConsoleLoggerService> _logger;
        private readonly string _url;
        private string _fileName;
        private string _folder;
        public ConsoleLoggerService(ILogger<ConsoleLoggerService> logger)
        {
            _logger = logger;
            _url = "https://www.uksivt.ru/raspisanie-zanyatiy";
        }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _folder = Path.Combine(Path.GetTempPath(), "BetterUksivt");
            if (Directory.Exists(_folder))
            {
                Directory
                    .GetFiles(_folder)
                    .Where(File.Exists)
                    .ToList()
                    .ForEach(File.Delete);
            }
            else
            {
                Directory.CreateDirectory(_folder);
            }
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    var fileUrl = await GetFileUrl();
                    if (!string.IsNullOrEmpty(fileUrl))
                    {
                        var path = await DownloadFile(fileUrl);
                        if (!string.IsNullOrEmpty(path))
                        {
                            await ParsePdfFile(path);
                        }
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError($"Ошибка при загрузке и сохранении файла: {ex.Message}");
                }

                await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken);
            }
            
        }
        private async Task<string?> GetFileUrl()
        {
            using var client = new HttpClient();
            string content = await client.GetStringAsync(_url);

            HtmlDocument doc = new();
            doc.LoadHtml(content);

            var fileNodes = doc.DocumentNode.SelectNodes("//a[contains(@href, '.pdf')]");

            var item = fileNodes?.FirstOrDefault(x =>
            x.GetAttributeValue("href", "").Contains("расписание", StringComparison.OrdinalIgnoreCase) &&
            x.GetAttributeValue("href", "").Contains("семестр", StringComparison.OrdinalIgnoreCase));

            return item?.GetAttributeValue("href", "");
        }
        private async Task<string> DownloadFile(string url)
        {
            if (!Directory.Exists(_folder))
            {
                Directory.CreateDirectory(_folder);
            }
            if (_fileName is not null
                && File.Exists(_fileName))
            {
                File.Delete(_fileName);
            }
            url = url.Replace("../../..//", "https://www.uksivt.ru/");
            using var client = new HttpClient();
            var file = await client.GetByteArrayAsync(new Uri(url));
            _fileName = Path.Combine(_folder, $"{Guid.NewGuid()}.pdf");
            await File.WriteAllBytesAsync(_fileName, file);
            return _fileName;
        }
        private async Task ParsePdfFile(string path)
        {
            using PdfReader pdfReader = new(path);
            using PdfDocument pdfDocument = new(pdfReader);
            for (int pageNumber = 1; pageNumber <= pdfDocument.GetNumberOfPages(); pageNumber++)
            {
                var textExtractor = new LocationTextExtractionStrategy();

                string pageText = PdfTextExtractor.GetTextFromPage(pdfDocument.GetPage(pageNumber), textExtractor);
                if (pageText.Contains("20П-1"))
                {
                    Console.WriteLine(pageText);

                    string[] rows = pageText.Split('\n');
                    foreach (var row in rows)
                    {
                        string[] cells = row.Split('\t');
                        foreach (var cell in cells)
                        {

                        }
                    }
                }
            }
        }
    }
}
