USE [Product]
GO

TRUNCATE TABLE  [dbo].[Product]

INSERT INTO [dbo].[Product]
           ([ShortSku]
           ,[Description]
           ,[Title]
           ,[RetailPrice])
     VALUES
           ('000A1'
           ,'000A1 description'
           ,'000A1 Title'
           ,156.00)
GO

INSERT INTO [dbo].[Product]
           ([ShortSku]
           ,[Description]
           ,[Title]
           ,[RetailPrice])
     VALUES
           ('000B1'
           ,'000B1 description'
           ,'000A1 Title'
           ,120.00)
GO


INSERT INTO [dbo].[Product]
           ([ShortSku]
           ,[Description]
           ,[Title]
           ,[RetailPrice])
     VALUES
           ('000C1'
           ,'000C1 description'
           ,'000C1 Title'
           ,110.00)
GO

INSERT INTO [dbo].[Product]
           ([ShortSku]
           ,[Description]
           ,[Title]
           ,[RetailPrice])
     VALUES
           ('000D1'
           ,'000D1 description'
           ,'000D1 Title'
           ,130.00)
GO