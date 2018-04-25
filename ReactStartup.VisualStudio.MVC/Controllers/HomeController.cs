using Microsoft.AspNetCore.Mvc;

namespace ReactStartup.VisualStudio.MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
