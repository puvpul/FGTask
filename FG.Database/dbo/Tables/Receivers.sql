CREATE TABLE [dbo].[Receivers] (
    [ReceiverId] INT          IDENTITY (1, 1) NOT NULL,
    [FirstName]  VARCHAR (50) NULL,
    [LastName]   VARCHAR (50) NULL,
    [Email]      VARCHAR (50) NULL,
    [Phone]      VARCHAR (50) NULL,
    [ShipmentId] INT          NOT NULL,
    CONSTRAINT [PK_Receivers] PRIMARY KEY CLUSTERED ([ReceiverId] ASC)
);

