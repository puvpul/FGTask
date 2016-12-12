using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FG.WebAPI.Models;
using FG.WebAPI.Repositories;

namespace FG.WebAPI.Controllers
{
    //[Authorize]
    [RoutePrefix("api/Shipment")]
    public class ShipmentController : ApiController
    {
        private IShipmentRepository _repository;
        public ShipmentController(IShipmentRepository repository)
        {
            _repository = repository;
        }
        [Route("Shipment")]
        public IHttpActionResult Post([FromBody]ShipmentBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

           // var receiver = AutoMapper.Mapper.Map<ShipmentBindingModel>(model);

            var shipmentId = _repository.Add(model);

            return Ok(shipmentId);

        }
    }
}
