---
title: "Accessibility Research: Analyzing Electric Wheelchair Usage Data"
excerpt: "My experience volunteering at Aspire CREATe & Accessibility Research Group, where I helped analyze electric wheelchair usage data to improve mobility solutions."
date: "2017-08-15"
author: "Kabir Dikko"
category: "Research"
tags: ["Accessibility", "Data Analysis", "Assistive Technology", "Research", "Rehabilitation Engineering"]
featured: true
image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop"
---

# Accessibility Research: Analyzing Electric Wheelchair Usage Data

During the summer of 2017, I volunteered at the Aspire Centre for Rehabilitation Engineering and Assistive Technology (Aspire CREATe) & Accessibility Research Group (ARG). This experience provided me with valuable insights into data analysis, algorithm development, and the real-world applications of assistive technology research.

## Project Background

For people with disabilities, the ability to move around independently is crucial for their self-esteem and well-being. According to the World Health Organization, the number of people with mobility impairments is estimated to increase globally by around 250,000 to 500,000 people each year. This growing population necessitates improved systems to aid in the control of electronic wheelchairs.

A key challenge in this field is developing methods to quantify how effectively an individual uses their wheelchair. This assessment is essential for medical personnel to evaluate patient mobility and suggest improvements that can reduce difficulties in everyday movements.

## Project Overview

The research project focused on analyzing electric wheelchair usage data to identify patterns and metrics that constitute effective wheelchair operation. Working alongside a PhD candidate, I helped process and analyze datasets collected from individuals using electric wheelchairs, with the goal of developing algorithms to improve wheelchair design and user training.

The wheelchair was equipped with various sensors that captured different data sets during operation, including:
- Linear and angular velocity
- X-Y coordinates for trajectory plotting
- User input patterns
- NASA Task Load Index (NASATLX) scores

Test subjects used a wheelchair simulation with various input methods (head array, sip-puff switch, and joystick) to navigate through obstacle courses while data was recorded. This data was then processed to develop metrics for characterizing wheelchair motion quality.

## My Contribution: Path Deviation Metric

My primary focus was developing the path deviation metric, which assesses decision-making quality and movement efficiency. The underlying principle is that the path requiring the least distance between points A and B is typically the most effective. By calculating deviation from this optimal path, we could determine the quality of a user's movement and decision-making.

### Methodology

The path deviation algorithm I developed worked in two main steps:

1. **Path Length Calculation**: Determining the total distance covered in a particular path
   - Found differences between consecutive X-Y coordinates
   - Applied the Pythagorean theorem to calculate point-to-point distances
   - Summed these distances to determine total path length

2. **Path Comparison**: Measuring deviation between a user's path and the reference path
   - Calculated minimum distances from points on one path to another
   - Created an array of these minimum distances
   - Computed the standard deviation of these distances to quantify path deviation

High deviation from the standard path indicated poor usage, while low deviation suggested good decision-making and movement efficiency.

### MATLAB Implementation

Here's the actual MATLAB code I developed for the path deviation metric:

```matlab
% Function to calculate the total distance of a path
function [ L ] = Distance( xy )
    % xy is a matrix containing the trajectory coordinates
    x = xy(:,2);
    y = xy(:,3);
    dx = diff(x);
    dy = diff(y);
    X2 = dx.^2;
    Y2 = dy.^2;
    S = plus(X2,Y2);
    P = sum(S);
    L = sqrt(P);
end

% Function to calculate minimum distance between paths
function [ SD ] = minDist( xy, xy2 )
    % xy and xy2 are matrices containing coordinates of two paths
    K = size(xy,1);
    E = [];
    for i = 1:K
        e = min(sqrt(((xy2(:,2)-xy(i,2)).^2)+(xy2(:,3)-xy(i,3)).^2));
        E = [E e];
    end
    SD = std(E);
end
```

This implementation allowed us to quantitatively compare different wheelchair paths and assess user performance objectively.

## Data Collection and Analysis

### Key Metrics Tracked

Beyond path deviation, the research collected several other key metrics from wheelchair users:

1. **Task Completion Time**: How long it took users to complete standardized mobility tasks
2. **Number of Collisions**: Instances where the wheelchair contacted obstacles
3. **Intermittence**: Smoothness of movement and control inputs
4. **NASA Task Load Index (NASATLX)**: Subjective workload assessment
5. **Average Velocity**: Speed of movement throughout the task

### Analysis Methodology

Our analysis process involved several stages:

1. **Data Preprocessing**: Cleaning and normalizing raw sensor data
2. **Statistical Analysis**: Identifying correlations between different metrics
3. **Pattern Recognition**: Looking for common patterns among skilled wheelchair users
4. **Algorithm Development**: Creating algorithms to classify wheelchair usage quality
5. **Validation**: Testing algorithms against expert assessments

## Key Findings

Our research yielded several important insights:

1. **Path Efficiency Indicators**: We found that the path deviation metric strongly correlated with expert assessments of wheelchair usage quality
2. **Input Method Comparison**: Different input methods (joystick, head array, sip-puff) showed varying levels of efficiency and learning curves
3. **Learning Patterns**: Clear patterns emerged showing how users improved over time with practice
4. **Individual Adaptations**: Each user developed unique strategies to overcome mobility challenges

## Classifier Development

A significant part of our work involved developing a classifier in MATLAB that could categorize wheelchair usage as "good" or "poor" based on the metrics we developed. The classifier:

1. **Feature Scaled** all metrics to normalize their importance
2. **Combined Multiple Metrics** including path deviation, completion time, and collision count
3. **Compared Against Expert Assessments** to validate its accuracy
4. **Visualized Results** through plots showing the relationship between different input methods and performance

## Impact and Applications

The research had several practical applications:

1. **Input Method Evaluation**: Identifying which control interfaces (joystick, head array, sip-puff) were most effective for different users
2. **Personalized Training Programs**: Data-driven insights to enhance wheelchair skills training
3. **Shared Control Development**: Informing the design of assistive systems that could complement user inputs
4. **Assessment Tools**: Objective methods for medical professionals to evaluate mobility progress

## Limitations and Future Work

Our approach had some limitations that suggest directions for future research:

1. **Path Optimization Criteria**: The shortest path may not always be the best path if it takes longer to navigate
2. **Multi-Criteria Assessment**: Future work could combine time efficiency with path efficiency for a more comprehensive evaluation
3. **Individual Differences**: More research is needed to account for varying physical capabilities and preferences

## Technical Skills Developed

This research experience helped me develop several valuable technical skills:

1. **MATLAB Programming**: Creating efficient algorithms for data processing
2. **Statistical Analysis**: Working with complex, multi-dimensional time-series data
3. **Algorithm Development**: Creating classification and prediction algorithms
4. **Data Visualization**: Representing complex mobility data in meaningful ways
5. **Documentation**: Creating clear documentation for complex analytical processes

## Personal Reflections

This experience at Aspire CREATe was my first significant exposure to the world of programming and working with computers. Prior to this volunteer opportunity, I had limited experience with coding, but the process of developing algorithms to solve real-world accessibility challenges sparked a genuine passion for technology.

My time at Aspire CREATe was transformative in how I approach coding and data analysis. I gained a deeper appreciation for:

1. **Real-world Impact**: Seeing how algorithms directly impact people's lives and mobility
2. **Expandable Code Design**: Writing code that other researchers could build upon
3. **Interdisciplinary Collaboration**: Working with engineers, therapists, and users
4. **Ethical Data Use**: Responsibly handling sensitive user data
5. **User-Centered Development**: Keeping the end users' needs at the center of technical work

This volunteer experience ultimately fueled my interest to pursue a career in technology. The satisfaction of creating solutions that made a tangible difference in people's lives, combined with the intellectual challenge of algorithm development, convinced me that this was the field where I wanted to build my future. What began as a summer volunteer position became the catalyst for my professional journey in technology.

## Conclusion

Volunteering at Aspire CREATe & Accessibility Research Group was an invaluable experience that shaped my approach to data analysis and software development. By developing the path deviation metric and contributing to the wheelchair usage classifier, I helped create tools that can improve mobility assessment and training for people with disabilities.

The experience taught me to write code that is not only functional but also expandable and maintainable—a lesson that continues to influence my work today. Most importantly, it demonstrated how technical skills can be applied to solve real-world problems and improve people's lives.

The intersection of technology and accessibility remains an area of personal interest, and I continue to look for opportunities to apply my skills in ways that can make technology more accessible and beneficial for all users.
