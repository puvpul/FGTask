CREATE TABLE [dbo].[Addresses] (
    [AddressId]      INT            IDENTITY (1, 1) NOT NULL,
    [AddressDetails] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Addresses] PRIMARY KEY CLUSTERED ([AddressId] ASC)
);

