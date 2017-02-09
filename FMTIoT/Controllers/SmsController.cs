using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Text;
using System.Threading.Tasks;

using Microsoft.ServiceBus.Messaging;
using System.Threading;
using System.Data;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net;
using Newtonsoft.Json;
using System.IO;
using Twilio;
using Twilio.TwiML;
using System.Web.Http;
using Twilio.TwiML.Mvc;

namespace FMTIoT.Controllers
{
    public class SmsController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "SMS Success!";

            return View();
        }

    }
}
