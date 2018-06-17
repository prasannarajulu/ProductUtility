USE [Product]
GO

ALTER TABLE [dbo].[Product] DROP CONSTRAINT [DF_Product_RetailPrice]
GO

/****** Object:  Table [dbo].[Product]    Script Date: 6/16/2018 12:47:37 PM ******/
DROP TABLE [dbo].[Product]
GO

/****** Object:  Table [dbo].[Product]    Script Date: 6/16/2018 12:47:37 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Product](
	[Id] [bigint] NOT NULL IDENTITY (1, 1),
	[ShortSku] [varchar](50) NOT NULL,
	[Description] [nvarchar](200) NOT NULL,
	[Title] [nvarchar](50) NOT NULL,
	[RetailPrice] [decimal](8, 2) NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Product] ADD  CONSTRAINT [DF_Product_RetailPrice]  DEFAULT ((0)) FOR [RetailPrice]
GO


