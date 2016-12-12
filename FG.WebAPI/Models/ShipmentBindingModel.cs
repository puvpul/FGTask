using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Channels;
using System.Web;

namespace FG.WebAPI.Models
{
    public class ShipmentBindingModel
    {
        public string SenderEmail { get; set; }//link with Identity
        public string SenderPhone { get; set; }
        public string SenderAddress { get; set;}
        public string ReceiverAddress { get; set; }
        public string ReceiverFirstName { get; set; }
        public string ReceiverLastName { get; set; }
        public string ReceiverEmail { get; set; }
        public string ReceiverPhone { get; set; }

    }
}