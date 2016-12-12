using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using System.Linq.Expressions;
using FG.WebAPI.Models;

namespace FG.WebAPI.Repositories
{
    public interface IShipmentRepository
    {
        int Add(ShipmentBindingModel item);            
        
    }
}
