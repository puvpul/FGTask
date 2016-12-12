CREATE PROCEDURE [dbo].[spAddShipment]

-- Declare variables for inserts to 3 tables

(@FromAddress [varchar], @SenderEmail [varchar], @ToAddress [varchar], @FirstName [varchar],@LastName [varchar],@Phone [varchar], @ReceiverEmail [varchar], @ShipmentID [int] OUTPUT)

AS

-- Insert into  table
Declare @FromAddressID int 
Declare @ToAddressID as int

INSERT INTO Addresses([AddressDetails] )
VALUES (@FromAddress)
SET @FromAddressID = @@IDENTITY

INSERT INTO Addresses([AddressDetails] )
VALUES (@ToAddress)
SET @ToAddressID = @@IDENTITY

Insert into Shipments(FromAddress,ToAddress, SenderEmail)
VALUES (@FromAddressID, @ToAddressID, @SenderEmail)
-- Retrieve the automatically generated ID VALUE from the  table
SET @ShipmentID = @@IDENTITY

Insert into Receivers(FirstName,LastName,Email,Phone,ShipmentId)
values(@FirstName,@LastName,@ReceiverEmail,@Phone,@ShipmentID)

Return