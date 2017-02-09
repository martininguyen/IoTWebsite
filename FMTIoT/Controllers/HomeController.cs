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
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public EmptyResult SendTextToCold(int temp)
        {
            // set our AccountSid and AuthToken
            string AccountSid = "AC5c886f996e3a678c12601ed858ac5c59";
            string AuthToken = "3a5baf09366a027ab3463bf9044ebb93";
            // instantiate a new Twilio Rest Client
            var client = new TwilioRestClient(AccountSid, AuthToken);


            // create message to send
            var msg = client.SendMessage(
                "+16195667660",
                "18589978234",
                "Too COLD please raise temperature to " + temp);



            return null;
        }

        public EmptyResult SendTextToHot(int temp)
        {
            string AccountSid = "AC5c886f996e3a678c12601ed858ac5c59";
            string AuthToken = "3a5baf09366a027ab3463bf9044ebb93";
            // instantiate a new Twilio Rest Client
            var client = new TwilioRestClient(AccountSid, AuthToken);


            // create message to send
            var msg = client.SendMessage(
                "+16195667660",
                "18589978234",
                "Too HOT please lower temperature to " + temp);



            return null;
        }


    }
    /*
    public class IoTHubData
    {
        public string Data { get; set; }
        // public string Device_id { get; set; }
        // public string Event { get; set; }
        public string Published_At { get; set; }

        public string FormattedPublished
        {
            get
            {
                return Published_At.Substring(0, 19);
            }
        }


        public string GetCSV()
        {
            return FormattedPublished + "," + Data + Environment.NewLine;
        }
    }

    public class Program
    {
        static string connectionString = "HostName=FMT-Particle-Hub.azure-devices.net;SharedAccessKeyName=FMTParticle-IoT-Hub;SharedAccessKey=kL+IL9Ly124ZmxXrot3FnRpyuaGGGovbBIwMpsAMnuE=";
        static string iotHubD2cEndpoint = "messages/events";
        static EventHubClient eventHubClient;



        static void Main(string[] args)
        {
            eventHubClient = EventHubClient.CreateFromConnectionString(connectionString, iotHubD2cEndpoint);

            var d2cPartitions = eventHubClient.GetRuntimeInformation().PartitionIds;

            CancellationTokenSource cts = new CancellationTokenSource();

            System.Console.CancelKeyPress += (s, e) =>
            {
                e.Cancel = true;
                cts.Cancel();
            };

            var tasks = new List<Task>();
            foreach (string partition in d2cPartitions)
            {
                tasks.Add(ReceiveMessagesFromDeviceAsync(partition, cts.Token));
            }
            Task.WaitAll(tasks.ToArray());

        }

        private static async Task ReceiveMessagesFromDeviceAsync(string partition, CancellationToken ct)
        {
            var eventHubReceiver = eventHubClient.GetDefaultConsumerGroup().CreateReceiver(partition, DateTime.UtcNow);
            while (true)
            {
                if (ct.IsCancellationRequested) break;
                EventData eventData = await eventHubReceiver.ReceiveAsync();
                if (eventData == null) continue;

                string data = Encoding.UTF8.GetString(eventData.GetBytes());

                var csvRow = JsonConvert.DeserializeObject<IoTHubData>(data).GetCSV();

                File.AppendAllText(@"/CSVPath/data3.csv", csvRow);


            }
        }

    } */
    

}
