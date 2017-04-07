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
using System.Configuration;
using System.Data.SqlClient;

namespace FMTIoT.Controllers
{
    public class IoTData
    {
        public string TempF { get; set; }

        public string currTemp()
        {
            return TempF; 
        }
    }
    public class HomeController : Controller
    {
        string temperature;
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }


        public void SendText(int temp)
        {
            string AccountSid = "AC5c886f996e3a678c12601ed858ac5c59";
            string AuthToken = "3a5baf09366a027ab3463bf9044ebb93";
            // instantiate a new Twilio Rest Client
            var client = new TwilioRestClient(AccountSid, AuthToken);


            // create message to send
            var msg = client.SendMessage(
                "+16195667660",
                "18589978234",
                "Please adjust temperature to: " + temp);

        }
        public void updateTempRange(string tempHigh, string tempLow)
        {
            //string connectionString = ConfigurationManager.ConnectionStrings["IoTData"].ToString();
            using (SqlConnection connection = new SqlConnection("Server=tcp:sql-iot.database.windows.net,1433;Initial Catalog=Iot_Data;Persist Security Info=False;User ID=iotadmin;Password=FMT_2310;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30"))
            using (SqlCommand command = connection.CreateCommand())
            {
                command.CommandText = "UPDATE RoomRange SET LowTempF = '" + tempLow + "', HighTempF = '" + tempHigh + "' WHERE ID='1'";
                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();
            }

        }

        public ContentResult getLatest()
        {
            using (WebClient client = new WebClient())
            {
                var json = client.DownloadString("http://fmtiotapi.azurewebsites.net/api/room/getlatest");
                temperature = Int32.Parse(JsonConvert.DeserializeObject<IoTData>(json).currTemp()).ToString();
            }
            return Content(temperature);
        }

    }


   
}
