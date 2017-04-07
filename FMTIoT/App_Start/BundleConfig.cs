﻿using System.Web;
using System.Web.Optimization;

namespace FMTIoT
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery.js",
                        "~/Scripts/jquery.easing.min.js",
                        "~/Scripts/jquery-ui.js",
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/jquery.knob.js",
                        "~/Scripts/custom.js"));
                

            bundles.Add(new ScriptBundle("~/bundles/d3").Include(
                        "~/Scripts/d3.js",
                        "~/Scripts/d3.min.js"));
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/scrolling-nav.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/animate.css",
                      "~/Content/font-awesome.css",
                      "~/Content/jquery-ui.css",
                      "~/Content/site.css"));
        }
    }
}
