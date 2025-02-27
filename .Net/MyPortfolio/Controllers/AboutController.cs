using Microsoft.AspNetCore.Mvc;

namespace MyPortfolio.Controllers;

[ApiController]
[Route("[controller]")]
public class AboutController : ControllerBase
{

    private readonly ILogger<AboutController> _logger;

    public AboutController(ILogger<AboutController> logger)
    {
        _logger = logger;
    }

    [HttpGet()]
    public string Get()
    {
        return "test description";
    }
}
