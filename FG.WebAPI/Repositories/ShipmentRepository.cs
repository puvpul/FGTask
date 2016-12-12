using FG.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Dapper;
using FG.WebAPI.Infrastructure;

namespace FG.WebAPI.Repositories 
{
    public class ShipmentRepository : IShipmentRepository
    {
        IConnectionFactory _connectionFactory;

        public ShipmentRepository(IConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }
        public int Add(ShipmentBindingModel item)
        {
            var query = "spAddShipment";
            var param = new DynamicParameters();
            param.Add("@FromAddress", item.SenderAddress);
            param.Add("@SenderEmail", item.SenderEmail);
            param.Add("@ToAddress", item.ReceiverAddress);
            param.Add("@FirstName", item.ReceiverFirstName);
            param.Add("@LastName", item.ReceiverLastName);
            param.Add("@Phone", item.ReceiverPhone);
            param.Add("@ReceiverEmail", item.ReceiverEmail);
            param.Add("ShipmentID", dbType:DbType.Int32, direction: ParameterDirection.Output);
            var shipmentId =  SqlMapper.Execute(_connectionFactory.GetConnection, query, param, commandType: CommandType.StoredProcedure);
            return shipmentId;
        }
    }
}