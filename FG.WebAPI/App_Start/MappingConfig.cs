using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FG.WebAPI.Models;

namespace FG.WebAPI
{
    public static class MappingConfig
    {
        public static void RegisterMaps()
        {
            AutoMapper.Mapper.Initialize(config =>
            {
                config.CreateMap<ShipmentBindingModel, Receiver>();
                  
            });
        }
    }
}