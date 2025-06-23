const fs = require('fs');
const path = require('path');

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}

function analyzeAndCleanDataset() {
    console.log('🔍 Analyzing WorldSustainabilityDataset.csv...');

    const csvPath = path.join(__dirname, '../public/WorldSustainabilityDataset.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const lines = csvContent.split('\n').filter(line => line.trim());

    if (lines.length === 0) {
        console.error('❌ CSV file is empty or not found');
        return;
    }

    const headers = parseCSVLine(lines[0]);
    const dataRows = lines.slice(1).map(line => parseCSVLine(line));

    console.log(`📊 Original dataset: ${headers.length} columns, ${dataRows.length} rows`);

    const targetColumns = [
        'Country Name',
        'Country Code',
        'Year',
        'World Regions (UN SDG Definition)',
        'Income Classification (World Bank Definition)',
        'GDP per capita (current US$) - NY.GDP.PCAP.CD',
        'Life expectancy at birth, total (years) - SP.DYN.LE00.IN',
        'Renewable energy consumption (% of total final energy consumption) - EG.FEC.RNEW.ZS',
        'Annual production-based emissions of carbon dioxide (CO2), measured in million tonnes',
        'Population, total - SP.POP.TOTL',
        'Access to electricity (% of population) - EG.ELC.ACCS.ZS',
        'Individuals using the Internet (% of population) - IT.NET.USER.ZS'
    ];

    const columnIndices = targetColumns.map(targetCol => {
        const index = headers.findIndex(header => header === targetCol);
        return { name: targetCol, index: index, found: index !== -1 };
    });

    const validColumns = columnIndices.filter(col => col.found);
    const missingColumns = columnIndices.filter(col => !col.found);

    console.log('\n✅ Found columns:');
    validColumns.forEach(col => {
        console.log(`  📈 ${col.name}`);
    });

    console.log('\n❌ Missing columns:');
    missingColumns.forEach(col => {
        console.log(`  📉 ${col.name}`);
    });

    const cleanedHeaders = validColumns.map(col => col.name);
    const cleanedRows = dataRows.map(row =>
        validColumns.map(col => row[col.index] || '')
    );

    const cleanedCsvContent = [
        cleanedHeaders.join(','),
        ...cleanedRows.map(row => row.join(','))
    ].join('\n');

    const cleanedCsvPath = path.join(__dirname, '../public/CleanSustainabilityDataset.csv');
    fs.writeFileSync(cleanedCsvPath, cleanedCsvContent);

    console.log(`\n✅ Clean dataset created: ${cleanedHeaders.length} columns, ${cleanedRows.length} rows`);
    console.log(`📁 Saved as: CleanSustainabilityDataset.csv`);

    console.log('\n📋 Clean Dataset Columns:');
    cleanedHeaders.forEach((header, index) => {
        console.log(`  ${index + 1}. ${header}`);
    });

    return {
        originalColumns: headers.length,
        cleanedColumns: cleanedHeaders.length,
        rows: cleanedRows.length,
        columnsRemoved: headers.length - cleanedHeaders.length,
        keyColumns: cleanedHeaders
    };
}

if (require.main === module) {
    analyzeAndCleanDataset();
}

module.exports = analyzeAndCleanDataset;