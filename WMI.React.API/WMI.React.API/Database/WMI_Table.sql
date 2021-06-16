CREATE DATABASE WMICARS;


USE [WMICARS]
GO

/****** Object:  Table [dbo].[HondaWMI]    Script Date: 6/15/2021 8:57:28 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CarInfoWMI](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[VehicleType] [nvarchar](50) NOT NULL,
	[WMI] [nvarchar](16) NOT NULL,
	[Country] [nvarchar](50) NULL,
	[DateAvailableToPublic] [date] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[UpdatedOn] [datetime] NULL,
 CONSTRAINT [PK_CarInfoWMI] PRIMARY KEY CLUSTERED 
(
	[WMI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO


