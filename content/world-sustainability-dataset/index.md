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
    columns={[
        "Country Name",
        "Year",
        "World Regions (UN SDG Definition)",
        "Income Classification (World Bank Definition)",
        "GDP per capita (current US$) - NY.GDP.PCAP.CD",
        "Life expectancy at birth, total (years) - SP.DYN.LE00.IN",
        "Annual production-based emissions of carbon dioxide (CO2), measured in million tonnes"
    ]}
/>

## Carbon Emissions Analysis

<LineChart
    title="Carbon Emissions by Country Over Time"
    xAxis="Year"
    yAxis="Annual production-based emissions of carbon dioxide (CO2), measured in million tonnes"
    data="WorldSustainabilityDataset.csv"
/>
