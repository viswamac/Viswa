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
        return "I am a passionate and results-driven full stack engineer with expertise in " +
            "Angular, .Net core, web api, entity framework core. I specialize in building scalable, " +
            "high-performance applications that enhance user experiences.\r\n\r\nI have a deep understanding " +
            "of frontend and backend technologies, and I enjoy solving complex problems through clean, " +
            "maintainable code. My goal is to create efficient, innovative solutions that align with business " +
            "needs while keeping up with the latest industry trends.";
    }
}
