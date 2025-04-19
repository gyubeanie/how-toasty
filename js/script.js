// Historical temperature anomaly data (1950-2023)
const historicalData = [
    {year: 1950, temp: 0.08}, {year: 1951, temp: 0.11}, {year: 1952, temp: 0.13},
    {year: 1953, temp: 0.20}, {year: 1954, temp: 0.07}, {year: 1955, temp: 0.06},
    {year: 1956, temp: 0.04}, {year: 1957, temp: 0.15}, {year: 1958, temp: 0.16},
    {year: 1959, temp: 0.19}, {year: 1960, temp: 0.14}, {year: 1961, temp: 0.18},
    {year: 1962, temp: 0.19}, {year: 1963, temp: 0.23}, {year: 1964, temp: 0.06},
    {year: 1965, temp: 0.08}, {year: 1966, temp: 0.09}, {year: 1967, temp: 0.12},
    {year: 1968, temp: 0.11}, {year: 1969, temp: 0.20}, {year: 1970, temp: 0.18},
    {year: 1971, temp: 0.10}, {year: 1972, temp: 0.17}, {year: 1973, temp: 0.28},
    {year: 1974, temp: 0.12}, {year: 1975, temp: 0.11}, {year: 1976, temp: 0.08},
    {year: 1977, temp: 0.24}, {year: 1978, temp: 0.19}, {year: 1979, temp: 0.24},
    {year: 1980, temp: 0.31}, {year: 1981, temp: 0.37}, {year: 1982, temp: 0.22},
    {year: 1983, temp: 0.38}, {year: 1984, temp: 0.23}, {year: 1985, temp: 0.21},
    {year: 1986, temp: 0.27}, {year: 1987, temp: 0.39}, {year: 1988, temp: 0.40},
    {year: 1989, temp: 0.34}, {year: 1990, temp: 0.47}, {year: 1991, temp: 0.42},
    {year: 1992, temp: 0.31}, {year: 1993, temp: 0.33}, {year: 1994, temp: 0.40},
    {year: 1995, temp: 0.48}, {year: 1996, temp: 0.40}, {year: 1997, temp: 0.54},
    {year: 1998, temp: 0.66}, {year: 1999, temp: 0.46}, {year: 2000, temp: 0.46},
    {year: 2001, temp: 0.58}, {year: 2002, temp: 0.63}, {year: 2003, temp: 0.64},
    {year: 2004, temp: 0.58}, {year: 2005, temp: 0.65}, {year: 2006, temp: 0.63},
    {year: 2007, temp: 0.66}, {year: 2008, temp: 0.58}, {year: 2009, temp: 0.68},
    {year: 2010, temp: 0.75}, {year: 2011, temp: 0.66}, {year: 2012, temp: 0.70},
    {year: 2013, temp: 0.74}, {year: 2014, temp: 0.79}, {year: 2015, temp: 0.94},
    {year: 2016, temp: 1.02}, {year: 2017, temp: 0.94}, {year: 2018, temp: 0.89},
    {year: 2019, temp: 0.99}, {year: 2020, temp: 1.02}, {year: 2021, temp: 0.89},
    {year: 2022, temp: 0.91}, {year: 2023, temp: 1.24}
];

// SSP Scenario data
const sspScenarios = {
    'SSP1-1.9': [
        {year: 2025, temp: 1.33}, {year: 2030, temp: 1.37}, {year: 2035, temp: 1.39},
        {year: 2040, temp: 1.42}, {year: 2045, temp: 1.42}, {year: 2050, temp: 1.41},
        {year: 2055, temp: 1.40}, {year: 2060, temp: 1.40}, {year: 2065, temp: 1.39},
        {year: 2070, temp: 1.37}, {year: 2075, temp: 1.36}, {year: 2080, temp: 1.36},
        {year: 2085, temp: 1.35}, {year: 2090, temp: 1.35}, {year: 2095, temp: 1.34},
        {year: 2100, temp: 1.34}
    ],
    'SSP2-2.6': [
        {year: 2025, temp: 1.31}, {year: 2030, temp: 1.41}, {year: 2035, temp: 1.51},
        {year: 2040, temp: 1.61}, {year: 2045, temp: 1.68}, {year: 2050, temp: 1.73},
        {year: 2055, temp: 1.75}, {year: 2060, temp: 1.76}, {year: 2065, temp: 1.76},
        {year: 2070, temp: 1.76}, {year: 2075, temp: 1.76}, {year: 2080, temp: 1.76},
        {year: 2085, temp: 1.76}, {year: 2090, temp: 1.75}, {year: 2095, temp: 1.75},
        {year: 2100, temp: 1.75}
    ],
    'SSP3-4.5': [
        {year: 2025, temp: 1.32}, {year: 2030, temp: 1.44}, {year: 2035, temp: 1.58},
        {year: 2040, temp: 1.71}, {year: 2045, temp: 1.84}, {year: 2050, temp: 1.96},
        {year: 2055, temp: 2.09}, {year: 2060, temp: 2.21}, {year: 2065, temp: 2.31},
        {year: 2070, temp: 2.40}, {year: 2075, temp: 2.46}, {year: 2080, temp: 2.51},
        {year: 2085, temp: 2.55}, {year: 2090, temp: 2.57}, {year: 2095, temp: 2.60},
        {year: 2100, temp: 2.62}
    ],
    'SSP4-Baseline': [
        {year: 2025, temp: 1.33}, {year: 2030, temp: 1.48}, {year: 2035, temp: 1.65},
        {year: 2040, temp: 1.84}, {year: 2045, temp: 2.04}, {year: 2050, temp: 2.25},
        {year: 2055, temp: 2.45}, {year: 2060, temp: 2.66}, {year: 2065, temp: 2.87},
        {year: 2070, temp: 3.08}, {year: 2075, temp: 3.28}, {year: 2080, temp: 3.44},
        {year: 2085, temp: 3.55}, {year: 2090, temp: 3.66}, {year: 2095, temp: 3.71},
        {year: 2100, temp: 3.76}
    ],
    'SSP5-Baseline': [
        {year: 2025, temp: 1.33}, {year: 2030, temp: 1.51}, {year: 2035, temp: 1.73},
        {year: 2040, temp: 1.96}, {year: 2045, temp: 2.22}, {year: 2050, temp: 2.51},
        {year: 2055, temp: 2.82}, {year: 2060, temp: 3.12}, {year: 2065, temp: 3.44},
        {year: 2070, temp: 3.74}, {year: 2075, temp: 4.04}, {year: 2080, temp: 4.32},
        {year: 2085, temp: 4.56}, {year: 2090, temp: 4.78}, {year: 2095, temp: 4.93},
        {year: 2100, temp: 5.05}
    ]
};

// Default prediction control points
let predictionPoints = [
    {year: 2025, temp: 1.28},
    {year: 2050, temp: 1.70},
    {year: 2100, temp: 2.50}
];

// Store user's prediction for the results page
let userPrediction = [];

// Chart objects
let predictionChart = null;
let comparisonChart = null;

// Chart scales for drag functionality
let xScale = null;
let yScale = null;

// Tooltip elements
let tooltip = null;

// Initialize charts on document load
document.addEventListener('DOMContentLoaded', function() {
    // Create tooltip element
    tooltip = document.createElement('div');
    tooltip.className = 'control-point-tooltip';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);

    // Step navigation
    setupStepNavigation();
    
    // Initialize the prediction chart
    initPredictionChart();
    
    // Set up slider controls
    setupSliderControls();
});

function setupStepNavigation() {
    // Step 1 to Step 2
    document.getElementById('next-to-prediction').addEventListener('click', function() {
        showStep(2);
    });
    
    // Step 2 to Step 1 (back button)
    document.getElementById('back-to-instructions').addEventListener('click', function() {
        showStep(1);
    });
    
    // Step 2 to Step 3 (submit prediction)
    document.getElementById('submit-prediction').addEventListener('click', function() {
        savePredictionAndShowResults();
    });
    
    // Step 3 to Step 2 (draw new prediction)
    document.getElementById('draw-new-prediction').addEventListener('click', function() {
        showStep(2);
    });
    
    // Reset prediction button
    document.getElementById('reset-prediction').addEventListener('click', resetPrediction);
}

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step-content').forEach(step => {
        step.classList.add('hidden');
    });
    
    // Show the target step
    document.getElementById(`step-${stepNumber}`).classList.remove('hidden');
    
    // Update progress indicator
    updateProgressIndicator(stepNumber);
    
    // If showing the comparison step, show loading screen first
    if (stepNumber === 3) {
        document.getElementById('loading-screen').classList.remove('hidden');
        document.getElementById('results-content').classList.add('hidden');
        
        // Simulate loading and then show results
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            document.getElementById('results-content').classList.remove('hidden');
            initComparisonChart();
        }, 1200);
    }
}

function updateProgressIndicator(currentStep) {
    // Reset all circles and progress lines
    for (let i = 1; i <= 3; i++) {
        const circle = document.getElementById(`step${i}-circle`);
        if (i < currentStep) {
            // Completed steps
            circle.classList.remove('bg-gray-300', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-400');
            circle.classList.add('bg-primary', 'text-white');
        } else if (i === currentStep) {
            // Current step
            circle.classList.remove('bg-gray-300', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-400');
            circle.classList.add('bg-primary', 'text-white');
        } else {
            // Future steps
            circle.classList.remove('bg-primary', 'text-white');
            circle.classList.add('bg-gray-300', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-400');
        }
    }
    
    // Update progress lines
    document.getElementById('progress-line-1').style.width = currentStep > 1 ? '100%' : '0%';
    document.getElementById('progress-line-2').style.width = currentStep > 2 ? '100%' : '0%';
}

function initPredictionChart() {
    const ctx = document.getElementById('prediction-chart').getContext('2d');
    
    // Create chart
    predictionChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Historical Data',
                    data: historicalData,
                    parsing: {
                        xAxisKey: 'year',
                        yAxisKey: 'temp'
                    },
                    borderColor: '#3B82F6', // blue
                    backgroundColor: 'rgba(59, 130, 246, 0.1)', // light blue
                    pointRadius: 3,
                    pointHoverRadius: 5,
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Your Prediction',
                    data: generateSmoothPrediction(),
                    parsing: {
                        xAxisKey: 'year',
                        yAxisKey: 'temp'
                    },
                    borderColor: '#EF4444', // red
                    backgroundColor: 'rgba(239, 68, 68, 0.1)', // light red
                    pointRadius: 0,
                    borderWidth: 2,
                    borderDash: [0],
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Control Points',
                    data: predictionPoints,
                    parsing: {
                        xAxisKey: 'year',
                        yAxisKey: 'temp'
                    },
                    borderColor: '#EF4444', // red
                    backgroundColor: '#EF4444', // red
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    borderWidth: 0,
                    showLine: false
                }
            ]
        },
        options: {
            responsive: true,
            aspectRatio: window.innerWidth < 768 ? 1.2 : 2,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                x: {
                    type: 'linear',
                    min: 1950,
                    max: 2100,
                    title: {
                        display: true,
                        text: 'Year',
                        color: getTextColor()
                    },
                    ticks: {
                        stepSize: 10,
                        color: getTextColor()
                    },
                    grid: {
                        color: getGridColor()
                    }
                },
                y: {
                    type: 'linear',
                    min: 0,
                    max: 6,
                    title: {
                        display: true,
                        text: 'Temperature Anomaly (°C)',
                        color: getTextColor()
                    },
                    ticks: {
                        callback: function(value) {
                            return '+' + value.toFixed(1) + '°C';
                        },
                        color: getTextColor()
                    },
                    grid: {
                        color: getGridColor()
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': +' + context.parsed.y.toFixed(2) + '°C';
                        }
                    }
                },
                annotation: {
                    annotations: {
                        connectLine: {
                            type: 'line',
                            xMin: historicalData[historicalData.length - 1].year,
                            xMax: predictionPoints[0].year,
                            yMin: historicalData[historicalData.length - 1].temp,
                            yMax: predictionPoints[0].temp,
                            borderColor: '#EF4444',
                            borderWidth: 2,
                            borderDash: [5, 5]
                        }
                    }
                }
            },
            onClick: handleChartClick
        }
    });
    
    // Save scale references for drag functionality
    xScale = predictionChart.scales.x;
    yScale = predictionChart.scales.y;
    
    // Set up drag interaction
    setupDragInteraction();
    
    // Adjust chart on window resize
    window.addEventListener('resize', function() {
        if (predictionChart) {
            predictionChart.options.aspectRatio = window.innerWidth < 768 ? 1.2 : 2;
            predictionChart.update();
            
            // Update scale references after resize
            xScale = predictionChart.scales.x;
            yScale = predictionChart.scales.y;
        }
    });
}

function setupDragInteraction() {
    const chartElement = document.getElementById('prediction-chart');
    let isDragging = false;
    let activePointIndex = -1;
    
    // Mouse events
    chartElement.addEventListener('mousedown', startDrag);
    chartElement.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', endDrag);
    
    // Touch events
    chartElement.addEventListener('touchstart', startDrag, { passive: false });
    chartElement.addEventListener('touchmove', moveDrag, { passive: false });
    window.addEventListener('touchend', endDrag);
    
    function startDrag(e) {
        // Prevent default for touch events
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        
        // Get mouse/touch position
        const pos = getEventPosition(e);
        
        // Check if a control point was clicked
        const pointIndex = findClickedPointIndex(pos.x, pos.y);
        
        if (pointIndex !== -1) {
            isDragging = true;
            activePointIndex = pointIndex;
            
            // Show tooltip
            updateTooltip(pos.clientX, pos.clientY, pointIndex);
            
            // Add active class to change cursor
            document.body.style.cursor = 'grabbing';
        }
    }
    
    function moveDrag(e) {
        if (!isDragging) return;
        
        // Prevent default for touch events to avoid scrolling
        if (e.type === 'touchmove') {
            e.preventDefault();
        }
        
        // Get mouse/touch position
        const pos = getEventPosition(e);
        
        // Convert screen coordinates to chart data values
        const dataX = xScale.getValueForPixel(pos.x);
        const dataY = yScale.getValueForPixel(pos.y);
        
        // Apply constraints based on point index
        if (activePointIndex === 0) {
            // First point: fixed year (2025), adjustable temperature
            predictionPoints[activePointIndex].temp = Math.min(Math.max(dataY, 1.24), 1.5);
        } else if (activePointIndex === 1) {
            // Middle point: adjustable year and temperature
            const minYear = 2030;
            const maxYear = 2090;
            const minTemp = 1.2;
            const maxTemp = 4.0;
            
            predictionPoints[activePointIndex].year = Math.min(Math.max(Math.round(dataX), minYear), maxYear);
            predictionPoints[activePointIndex].temp = Math.min(Math.max(dataY, minTemp), maxTemp);
            
            // Update year slider
            document.getElementById('midpoint-year-slider').value = predictionPoints[activePointIndex].year;
            document.getElementById('mid-year').textContent = predictionPoints[activePointIndex].year;
        } else if (activePointIndex === 2) {
            // Last point: fixed year (2100), adjustable temperature
            predictionPoints[activePointIndex].temp = Math.min(Math.max(dataY, 1.0), 6.0);
        }
        
        // Update sliders
        updateSlidersFromPoints();
        
        // Update display values
        updateControlPointsDisplay();
        
        // Update prediction chart
        updatePredictionChart();
        
        // Update tooltip position
        updateTooltip(pos.clientX, pos.clientY, activePointIndex);
    }
    
    function endDrag() {
        if (isDragging) {
            isDragging = false;
            activePointIndex = -1;
            
            // Hide tooltip
            tooltip.style.display = 'none';
            
            // Restore cursor
            document.body.style.cursor = '';
        }
    }
    
    function getEventPosition(e) {
        const rect = chartElement.getBoundingClientRect();
        let clientX, clientY, x, y;
        
        if (e.type.includes('touch')) {
            // Touch event
            const touch = e.touches[0] || e.changedTouches[0];
            clientX = touch.clientX;
            clientY = touch.clientY;
            x = clientX - rect.left;
            y = clientY - rect.top;
        } else {
            // Mouse event
            clientX = e.clientX;
            clientY = e.clientY;
            x = e.offsetX;
            y = e.offsetY;
        }
        
        return { x, y, clientX, clientY };
    }
    
    function findClickedPointIndex(x, y) {
        // Convert control points to pixel positions
        const points = predictionPoints.map(point => ({
            x: xScale.getPixelForValue(point.year),
            y: yScale.getPixelForValue(point.temp)
        }));
        
        // Check if click is within any point's radius
        const hitRadius = 15; // Larger hit area for better touch handling
        
        for (let i = 0; i < points.length; i++) {
            const dx = points[i].x - x;
            const dy = points[i].y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance <= hitRadius) {
                return i;
            }
        }
        
        return -1;
    }
    
    function updateTooltip(x, y, pointIndex) {
        const point = predictionPoints[pointIndex];
        
        tooltip.textContent = `Year: ${point.year}, Temp: +${point.temp.toFixed(2)}°C`;
        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
        tooltip.style.display = 'block';
    }
}

function handleChartClick(event, elements) {
    if (elements && elements.length > 0) {
        const clickedPointIndex = elements[0].index;
        
        // Only handle clicks on Control Points dataset (index 2)
        if (elements[0].datasetIndex === 2) {
            // Get point details for updating UI
            const point = predictionPoints[clickedPointIndex];
            
            console.log(`Clicked on point: Year ${point.year}, Temp ${point.temp.toFixed(2)}°C`);
            
            // You could add additional interaction here if needed
        }
    }
}

function getTextColor() {
    return document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';
}

function getGridColor() {
    return document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
}

function setupSliderControls() {
    // 2025 Point Temperature Slider
    const point1Slider = document.getElementById('point1-slider');
    point1Slider.addEventListener('input', function() {
        predictionPoints[0].temp = parseFloat(this.value);
        updateControlPointsDisplay();
        updatePredictionChart();
    });
    
    // Middle Point Year Slider
    const midpointYearSlider = document.getElementById('midpoint-year-slider');
    midpointYearSlider.addEventListener('input', function() {
        predictionPoints[1].year = parseInt(this.value);
        document.getElementById('mid-year').textContent = predictionPoints[1].year;
        updatePredictionChart();
    });
    
    // Middle Point Temperature Slider
    const point2Slider = document.getElementById('point2-slider');
    point2Slider.addEventListener('input', function() {
        predictionPoints[1].temp = parseFloat(this.value);
        updateControlPointsDisplay();
        updatePredictionChart();
    });
    
    // 2100 Point Temperature Slider
    const point3Slider = document.getElementById('point3-slider');
    point3Slider.addEventListener('input', function() {
        predictionPoints[2].temp = parseFloat(this.value);
        updateControlPointsDisplay();
        updatePredictionChart();
    });
}

function updateSlidersFromPoints() {
    // Update sliders to match the current control points
    document.getElementById('point1-slider').value = predictionPoints[0].temp;
    document.getElementById('midpoint-year-slider').value = predictionPoints[1].year;
    document.getElementById('point2-slider').value = predictionPoints[1].temp;
    document.getElementById('point3-slider').value = predictionPoints[2].temp;
}

function updateControlPointsDisplay() {
    // Update the displayed values for control points
    document.getElementById('point1-value').textContent = '+' + predictionPoints[0].temp.toFixed(2) + '°C';
    document.getElementById('point2-value').textContent = '+' + predictionPoints[1].temp.toFixed(2) + '°C';
    document.getElementById('point3-value').textContent = '+' + predictionPoints[2].temp.toFixed(2) + '°C';
}

function updatePredictionChart() {
    // Update prediction curve
    predictionChart.data.datasets[1].data = generateSmoothPrediction();
    
    // Update control points
    predictionChart.data.datasets[2].data = predictionPoints;
    
    // Update connector line annotation
    predictionChart.options.plugins.annotation.annotations.connectLine.yMax = predictionPoints[0].temp;
    
    // Update chart
    predictionChart.update();
}

function generateSmoothPrediction() {
    // Create a smooth curve from historical data through control points
    
    // Start from the last historical data point
    const lastHistorical = historicalData[historicalData.length - 1];
    
    // Generate points along the prediction curve
    const predictionData = [];
    
    // Add the last historical point
    predictionData.push(lastHistorical);
    
    // Generate points between the last historical data and the first control point
    const firstSegmentYears = predictionPoints[0].year - lastHistorical.year;
    for (let i = 1; i < firstSegmentYears; i++) {
        const year = lastHistorical.year + i;
        const progress = i / firstSegmentYears;
        const temp = lastHistorical.temp + (predictionPoints[0].temp - lastHistorical.temp) * progress;
        predictionData.push({year, temp});
    }
    
    // Add the control points
    predictionPoints.forEach(point => {
        predictionData.push({...point});
    });
    
    // Generate more points between control points for a smoother curve
    for (let i = 0; i < predictionPoints.length - 1; i++) {
        const start = predictionPoints[i];
        const end = predictionPoints[i + 1];
        const years = end.year - start.year;
        
        // Skip if years is too small
        if (years <= 2) continue;
        
        // Add intermediate points
        const numPoints = Math.floor(years / 2);
        for (let j = 1; j < numPoints; j++) {
            const progress = j / numPoints;
            const year = Math.round(start.year + (end.year - start.year) * progress);
            
            // Cubic interpolation for smoother curve
            const t = progress;
            const t2 = t * t;
            const t3 = t2 * t;
            const temp = (2*t3-3*t2+1) * start.temp + (t3-2*t2+t) * (end.temp - start.temp) + (-2*t3+3*t2) * end.temp;
            
            // Insert at the right position to maintain order
            const insertIndex = predictionData.findIndex(p => p.year > year);
            if (insertIndex === -1) {
                predictionData.push({year, temp});
            } else {
                predictionData.splice(insertIndex, 0, {year, temp});
            }
        }
    }
    
    // Sort by year to ensure the line is drawn correctly
    predictionData.sort((a, b) => a.year - b.year);
    
    return predictionData;
}

function resetPrediction() {
    // Reset to default prediction values
    predictionPoints = [
        {year: 2025, temp: 1.28},
        {year: 2050, temp: 1.70},
        {year: 2100, temp: 2.50}
    ];
    
    // Update sliders
    updateSlidersFromPoints();
    
    // Update display values
    updateControlPointsDisplay();
    
    // Update chart
    updatePredictionChart();
}

function savePredictionAndShowResults() {
    // Save the user's prediction for the comparison chart
    userPrediction = generateSmoothPrediction();
    
    // Show the results step
    showStep(3);
}

function initComparisonChart() {
    const ctx = document.getElementById('comparison-chart').getContext('2d');
    
    // Create datasets for the comparison chart
    const datasets = [
        {
            label: 'Historical Data',
            data: historicalData,
            parsing: {
                xAxisKey: 'year',
                yAxisKey: 'temp'
            },
            borderColor: '#3B82F6', // blue
            backgroundColor: 'rgba(59, 130, 246, 0.05)',
            pointRadius: 2,
            pointHoverRadius: 4,
            borderWidth: 2,
            tension: 0.3,
            fill: false,
            order: 7
        },
        {
            label: 'Your Prediction',
            data: userPrediction,
            parsing: {
                xAxisKey: 'year',
                yAxisKey: 'temp'
            },
            borderColor: '#EF4444', // red
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            tension: 0.4,
            fill: false,
            order: 1
        }
    ];
    
    // Add SSP scenarios
    let sspOrder = 2;
    Object.entries(sspScenarios).forEach(([key, data]) => {
        let color, bgColor;
        
        switch(key) {
            case 'SSP1-1.9':
                color = '#10B981'; // green
                bgColor = 'rgba(16, 185, 129, 0.1)';
                break;
            case 'SSP2-2.6':
                color = '#84CC16'; // lime
                bgColor = 'rgba(132, 204, 22, 0.1)';
                break;
            case 'SSP3-4.5':
                color = '#FBBF24'; // amber
                bgColor = 'rgba(251, 191, 36, 0.1)';
                break;
            case 'SSP4-Baseline':
                color = '#F97316'; // orange
                bgColor = 'rgba(249, 115, 22, 0.1)';
                break;
            case 'SSP5-Baseline':
                color = '#DC2626'; // red
                bgColor = 'rgba(220, 38, 38, 0.1)';
                break;
        }
        
        datasets.push({
            label: key,
            data: data,
            parsing: {
                xAxisKey: 'year',
                yAxisKey: 'temp'
            },
            borderColor: color,
            backgroundColor: bgColor,
            pointRadius: 0,
            pointHoverRadius: 3,
            borderWidth: 1.5,
            tension: 0.3,
            fill: false,
            order: sspOrder++
        });
    });
    
    // Create chart
    comparisonChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: datasets
        },
        options: {
            responsive: true,
            aspectRatio: window.innerWidth < 768 ? 1.2 : 2,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                x: {
                    type: 'linear',
                    min: 1950,
                    max: 2100,
                    title: {
                        display: true,
                        text: 'Year',
                        color: getTextColor()
                    },
                    ticks: {
                        stepSize: 10,
                        color: getTextColor()
                    },
                    grid: {
                        color: getGridColor()
                    }
                },
                y: {
                    type: 'linear',
                    min: 0,
                    max: 6,
                    title: {
                        display: true,
                        text: 'Temperature Anomaly (°C)',
                        color: getTextColor()
                    },
                    ticks: {
                        callback: function(value) {
                            return '+' + value.toFixed(1) + '°C';
                        },
                        color: getTextColor()
                    },
                    grid: {
                        color: getGridColor()
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': +' + context.parsed.y.toFixed(2) + '°C';
                        }
                    }
                },
                annotation: {
                    annotations: {
                        connectLine: {
                            type: 'line',
                            xMin: historicalData[historicalData.length - 1].year,
                            xMax: userPrediction.find(p => p.year > historicalData[historicalData.length - 1].year).year,
                            yMin: historicalData[historicalData.length - 1].temp,
                            yMax: userPrediction.find(p => p.year > historicalData[historicalData.length - 1].year).temp,
                            borderColor: '#EF4444',
                            borderWidth: 2,
                            borderDash: [5, 5]
                        }
                    }
                }
            }
        }
    });
    
    // Adjust chart on window resize
    window.addEventListener('resize', function() {
        if (comparisonChart) {
            comparisonChart.options.aspectRatio = window.innerWidth < 768 ? 1.2 : 2;
            comparisonChart.update();
        }
    });
}
