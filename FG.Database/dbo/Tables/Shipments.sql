CREATE TABLE [dbo].[Shipments] (
    [ShipmentId]  INT            IDENTITY (1, 1) NOT NULL,
    [FromAddress] INT            NULL,
    [ToAddress]   INT            NULL,
    [SenderEmail] NVARCHAR (256) NULL,
    CONSTRAINT [PK_Shipments] PRIMARY KEY CLUSTERED ([ShipmentId] ASC),
    CONSTRAINT [FK_Shipments_FromAddress] FOREIGN KEY ([FromAddress]) REFERENCES [dbo].[Addresses] ([AddressId]),
    CONSTRAINT [FK_Shipments_Senders] FOREIGN KEY ([SenderEmail]) REFERENCES [dbo].[AspNetUsers] ([UserName]),
    CONSTRAINT [FK_Shipments_ToAddress] FOREIGN KEY ([ToAddress]) REFERENCES [dbo].[Addresses] ([AddressId])
);

