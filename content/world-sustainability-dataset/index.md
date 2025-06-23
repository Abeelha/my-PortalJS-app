---
title: "World Sustainability Dataset"
author: "Abeelha"
description: "Comprehensive global sustainability indicators including economic, environmental, and social metrics across countries and regions"
modified: "2025-06-23"
files: ["WorldSustainabilityDataset.csv"]
group: "Sustainability"
---

A comprehensive dataset showcasing global sustainability indicators across countries and regions. This dataset includes economic, environmental, and social metrics that help understand sustainable development patterns worldwide.

## Key Metrics Overview

<Table
    url="WorldSustainabilityDataset.csv"
    columns={["Country Name", "Year", "World Regions (UN SDG Definition)", "Income Classification (World Bank Definition)", "Annual production-based emissions of carbon dioxide (CO2), measured in million tonnes", "Renewable energy consumption (% of total final energy consumption) - EG.FEC.RNEW.ZS", "GDP per capita (current US$) - NY.GDP.PCAP.CD"]}
/>

## Carbon Emissions Analysis

<LineChart
    title="Carbon Emissions by Country Over Time"
    xAxis="Year"
    yAxis="Annual production-based emissions of carbon dioxide (CO2), measured in million tonnes"
    data="WorldSustainabilityDataset.csv"
/>

## Renewable Energy Trends

<LineChart
    title="Renewable Energy Consumption Patterns"
    xAxis="Year"
    yAxis="Renewable energy consumption (% of total final energy consumption) - EG.FEC.RNEW.ZS"
    data="WorldSustainabilityDataset.csv"
/>

## Economic Development

<LineChart
    title="GDP per Capita Development"
    xAxis="Year"
    yAxis="GDP per capita (current US$) - NY.GDP.PCAP.CD"
    data="WorldSustainabilityDataset.csv"
/>

## Life Expectancy Trends

<LineChart
    title="Life Expectancy by Region"
    xAxis="Year"
    yAxis="Life expectancy at birth, total (years) - SP.DYN.LE00.IN"
    data="WorldSustainabilityDataset.csv"
/>

## Electricity Access

<LineChart
    title="Access to Electricity Coverage"
    xAxis="Year"
    yAxis="Access to electricity (% of population) - EG.ELC.ACCS.ZS"
    data="WorldSustainabilityDataset.csv"
/>

## Population Demographics

<LineChart
    title="Total Population Growth"
    xAxis="Year"
    yAxis="Population, total - SP.POP.TOTL"
    data="WorldSustainabilityDataset.csv"
/>
