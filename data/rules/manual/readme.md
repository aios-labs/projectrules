---
description: "General information based on the latest ./README.md content"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "stacksjs/ts-collect"
__meta__tags: ["TypeScript","Collections","Data Processing","APIs","Dependency-free"]
__meta__rate: 7
---
Update it if APIs change:

# ts-collect

> A powerful, fully-typed collections library for TypeScript, combining Laravel's collection elegance with advanced data processing capabilities. Features a fluent API, lazy evaluation, statistical analysis, machine learning operations, and comprehensive data manipulation tools—all with zero dependencies.

## Features

- Lightweight & Dependency-free
- Type safe
- Laravel-inspired APIs

### Core Operations (Laravel Collection API)

- Standard operations _([map](mdc:https:/ts-collect.netlify.app/api/map), [filter](mdc:https:/ts-collect.netlify.app/api/filter), [reduce](mdc:https:/ts-collect.netlify.app/api/reduce))_
- FlatMap and MapSpread operations _([flatMap](mdc:https:/ts-collect.netlify.app/api/flatMap), [mapSpread](mdc:https:/ts-collect.netlify.app/api/mapSpread))_
- Element access _([first](mdc:https:/ts-collect.netlify.app/api/first), [firstOrFail](mdc:https:/ts-collect.netlify.app/api/firstOrFail), [last](mdc:https:/ts-collect.netlify.app/api/last), [nth](mdc:https:/ts-collect.netlify.app/api/nth))_
- Subset operations _([take](mdc:https:/ts-collect.netlify.app/api/take), [skip](mdc:https:/ts-collect.netlify.app/api/skip), [slice](mdc:https:/ts-collect.netlify.app/api/slice))_
- Unique value handling _([unique](mdc:https:/ts-collect.netlify.app/api/unique))_
- Chunk operations _([chunk](mdc:https:/ts-collect.netlify.app/api/chunk))_
- Tap and Pipe utilities _([tap](mdc:https:/ts-collect.netlify.app/api/tap), [pipe](mdc:https:/ts-collect.netlify.app/api/pipe))_
- Collection conversion _([toArray](mdc:https:/ts-collect.netlify.app/api/toArray), [toMap](mdc:https:/ts-collect.netlify.app/api/toMap), [toSet](mdc:https:/ts-collect.netlify.app/api/toSet))_
- Collection inspection _([count](mdc:https:/ts-collect.netlify.app/api/count), [isEmpty](mdc:https:/ts-collect.netlify.app/api/isEmpty), [isNotEmpty](mdc:https:/ts-collect.netlify.app/api/isNotEmpty))_
- Combine and collapse operations _([combine](mdc:https:/ts-collect.netlify.app/api/combine), [collapse](mdc:https:/ts-collect.netlify.app/api/collapse))_
- Contains checks _([contains](mdc:https:/ts-collect.netlify.app/api/contains), [containsOneItem](mdc:https:/ts-collect.netlify.app/api/containsOneItem))_
- Each iterations _([each](mdc:https:/ts-collect.netlify.app/api/each), [eachSpread](mdc:https:/ts-collect.netlify.app/api/eachSpread))_
- Only and except operations _([only](mdc:https:/ts-collect.netlify.app/api/only), [except](mdc:https:/ts-collect.netlify.app/api/except))_
- Forget and random selection _([forget](mdc:https:/ts-collect.netlify.app/api/forget), [random](mdc:https:/ts-collect.netlify.app/api/random))_
- Push, prepend, and put operations _([push](mdc:https:/ts-collect.netlify.app/api/push), [prepend](mdc:https:/ts-collect.netlify.app/api/prepend), [put](mdc:https:/ts-collect.netlify.app/api/put))_
- Skip and take variants _([skipUntil](mdc:https:/ts-collect.netlify.app/api/skipUntil), [skipWhile](mdc:https:/ts-collect.netlify.app/api/skipWhile), [takeUntil](mdc:https:/ts-collect.netlify.app/api/takeUntil), [takeWhile](mdc:https:/ts-collect.netlify.app/api/takeWhile))_
- Sole item retrieval _([sole](mdc:https:/ts-collect.netlify.app/api/sole))_
- Conditional execution _([when](mdc:https:/ts-collect.netlify.app/api/when), [unless](mdc:https:/ts-collect.netlify.app/api/unless)unwrap operations _([wrap](mdc:https:/ts-collect.netlify.app/api/wrap), [unwrap](mdc:https:/ts-collect.netlify.app/api/unwrap))_

### Advanced Array & Object Operations

- GroupBy with multiple key support _([groupBy](mdc:https:/ts-collect.netlify.app/api/groupBy), [groupByMultiple](mdc:https:/ts-collect.netlify.app/api/groupByMultiple))_
- Value extraction _([pluck](mdc:https:/ts-collect.netlify.app/api/pluck))_
- Where clause variations
  - Basic where operations _([where](mdc:https:/ts-collect.netlify.app/api/where), [whereIn](mdc:https:/ts-collect.netlify.app/api/whereIn), [whereNotIn](mdc:https:/ts-collect.netlify.app/api/whereNotIn))_
  - Range checks _([whereBetween](mdc:https:/ts-collect.netlify.app/api/whereBetween), [whereNotBetween](mdc:https:/ts-collect.netlify.app/api/whereNotBetween))_
  - Null handling _([whereNull](mdc:https:/ts-collect.netlify.app/api/whereNull), [whereNotNull](mdc:https:/ts-collect.netlify.app/api/whereNotNull))_
  - Pattern matching _([whereLike](mdc:https:/ts-collect.netlify.app/api/whereLike), [whereRegex](mdc:https:/ts-collect.netlify.app/api/whereRegex))_
  - Type checks _([whereInstanceOf](mdc:https:/ts-collect.netlify.app/api/whereInstanceOf))_
- Comprehensive sorting
  - Basic sort operations _([sort](mdc:https:/ts-collect.netlify.app/api/sort))_
  - Key-based sorting _([sortBy](mdc:https:/ts-collect.netlify.app/api/sortBy), [sortByDesc](mdc:https:/ts-collect.netlify.app/api/sortByDesc))_
  - Key sorting _([sortKeys](mdc:https:/ts-collect.netlify.app/api/sortKeys), [sortKeysDesc](mdc:https:/ts-collect.netlify.app/api/sortKeysDesc))_
- [Pagination](mdc:https:/ts-collect.netlify.app/api/pagination) & [Cursor](mdc:https:/ts-collect.netlify.app/api/cursor) iteration
- [Data partitioning](mdc:https:/ts-collect.netlify.app/api/partitioning)
- Set operations _([union](mdc:https:/ts-collect.netlify.app/api/union), [intersect](mdc:https:/ts-collect.netlify.app/api/intersect), [diff](mdc:https:/ts-collect.netlify.app/api/diff), [symmetricDiff](mdc:https:/ts-collect.netlify.app/api/symmetricDiff))_
- Advanced products _([cartesianProduct](mdc:https:/ts-collect.netlify.app/api/cartesianProduct))_
- Recursive operations _([mergeRecursive](mdc:https:/ts-collect.netlify.app/api/mergeRecursive), [replaceRecursive](mdc:https:/ts-collect.netlify.app/api/replaceRecursive))_

### Advanced Transformations

- Group transformations _([mapToGroups](mdc:https:/ts-collect.netlify.app/api/mapToGroups))_
- Array handling _([mapSpread](mdc:https:/ts-collect.netlify.app/api/mapSpread), [mapWithKeys](mdc:https:/ts-collect.netlify.app/api/mapWithKeys))_
- Conditional mapping _([mapUntil](mdc:https:/ts-collect.netlify.app/api/mapUntil), [mapOption](mdc:https:/ts-collect.netlify.app/api/mapOption))_
- Data restructuring _([transform](mdc:https:/ts-collect.netlify.app/api/transform))_
- Type system integration _([cast](mdc:https:/ts-collect.netlify.app/api/cast), [mapInto](mdc:https:/ts-collect.netlify.app/api/mapInto))_
- Property operations _([pick](mdc:https:/ts-collect.netlify.app/api/pick), [omit](mdc:https:/ts-collect.netlify.app/api/omit))_
- [Fuzzy matching](mdc:https:/ts-collect.netlify.app/api/fuzzyMatch) algorithms
- Key-value transformations _([flip](mdc:https:/ts-collect.netlify.app/api/flip), [undot](mdc:https:/ts-collect.netlify.app/api/undot))_

### Statistical Operations

- Basic statistics
  - [Sum](mdc:https:/ts-collect.netlify.app/api/sum) and [averages](mdc:https:/ts-collect.netlify.app/api/avg)
  - [Median](mdc:https:/ts-collect.netlify.app/api/median) and [mode](mdc:https:/ts-collect.netlify.app/api/mode)
  - Range _([min](mdc:https:/ts-collect.netlify.app/api/min), [max](mdc:https:/ts-collect.netlify.app/api/max))_
  - [Products](mdc:https:/ts-collect.netlify.app/api/product)
- Advanced statistics
  - [Standard deviation](mdc:https:/ts-collect.netlify.app/api/standarddeviation)
  - [Variance analysis](mdc:https:/ts-collect.netlify.app/api/variance)
  - [Percentile calculations](mdc:https:/ts-collect.netlify.app/api/percentile)
  - [Correlation coefficients](mdc:https:/ts-collect.netlify.app/api/correlation)
  - [Entropy measures](mdc:https:/ts-collect.netlify.app/api/entropy)
  - [Z-score computations](mdc:https:/ts-collect.netlify.app/api/zscore)
  - Distribution analysis _([kurtosis](mdc:https:/ts-collect.netlify.app/api/kurtosis), [skewness](mdc:https:/ts-collect.netlify.app/api/skewness))_
  - [Covariance calculations](mdc:https:/ts-collect.netlify.app/api/covariance)

### Time Series Analysis

- [Series conversion](mdc:https:/ts-collect.netlify.app/api/timeseries) and [formatting](mdc:https:/ts-collect.netlify.app/api/datetime)
- [Moving average calculations](mdc:https:/ts-collect.netlify.app/api/movingAverage)
- [Trend detection](mdc:https:/ts-collect.netlify.app/api/trend) and analysis
- [Seasonality identification](mdc:https:/ts-collect.netlify.app/api/seasonality)
- [Time-based forecasting](mdc:https:/ts-collect.netlify.app/api/forecast)
- [Temporal grouping operations](mdc:https:/ts-collect.netlify.app/api/groupbymultiple)
- [Time-based aggregations](mdc:https:/ts-collect.netlify.app/api/aggregate)
- [Interval handling](mdc:https:/ts-collect.netlify.app/api/timeseries)

### Machine Learning Operations

- Clustering algorithms
  - [K-means implementation](mdc:https:/ts-collect.netlify.app/api/kmeans)
  - [Cluster analysis tools](mdc:https:/ts-collect.netlify.app/api/kmeans)
- Regression analysis
  - [Linear regression](mdc:https:/ts-collect.netlify.app/api/linearRegression)
  - [Multi-variable regression](mdc:https:/ts-collect.netlify.app/api/linearRegression)
- Classification tools
  - [K-nearest neighbors _(KNN)_](mdc:https:/ts-collect.netlify.app/api/knn)
  - [Naive Bayes classifier](mdc:https:/ts-collect.netlify.app/api/naiveBayes)
- [Anomaly detection systems](mdc:https:/ts-collect.netlify.app/api/detectAnomalies)
- Data preparation
  - [Normalization](mdc:https:/ts-collect.netlify.app/api/normalize)
  - [Outlier handling](mdc:https:/ts-collect.netlify.app/api/removeOutliers)
  - [Feature scaling](mdc:https:/ts-collect.netlify.app/api/normalize)

### Async & Performance Optimization

- Asynchronous operations
  - [Async mapping](mdc:https:/ts-collect.netlify.app/api/mapAsync)
  - [Async filtering](mdc:https:/ts-collect.netlify.app/api/filterAsync)
  - [Async reduction](mdc:https:/ts-collect.netlify.app/api/reduceAsync)
- [Parallel processing capabilities](mdc:https:/ts-collect.netlify.app/api/parallel)
- [Batch processing systems](mdc:https:/ts-collect.netlify.app/api/batch)
- [Lazy evaluation strategies](mdc:https:/ts-collect.netlify.app/api/lazy)
- [Caching mechanisms](mdc:https:/ts-collect.netlify.app/api/cache)
- Performance tools
  - [Profiling utilities](mdc:https:/ts-collect.netlify.app/api/profile)
  - [Memory optimization](mdc:https:/ts-collect.netlify.app/api/metrics)
  - [Index management](mdc:https:/ts-collect.netlify.app/api/index)
  - [Operation monitoring](mdc:https:/ts-collect.netlify.app/api/instrument)

### Data Validation & Quality

- Validation framework
  - [Schema validation](mdc:https:/ts-collect.netlify.app/api/validateSync)
  - [Custom rules](mdc:https:/ts-collect.netlify.app/api/validate)
  - [Async validation](mdc:https:/ts-collect.netlify.app/api/validate)
- [Data sanitization tools](mdc:https:/ts-collect.netlify.app/api/sanitize)
- [Quality metrics](mdc:https:/ts-collect.netlify.app/api/metrics)
- Constraint management
- Error handling
- [Type enforcement](mdc:https:/ts-collect.netlify.app/api/assertValid)

### Text Processing

- String manipulation
  - [Join operations](mdc:https:/ts-collect.netlify.app/api/join)
  - [Implode functionality](mdc:https:/ts-collect.netlify.app/api/implode)
  - [Case transformation](mdc:https:/ts-collect.netlify.app/api/lower)
- [URL slug generation](mdc:https:/ts-collect.netlify.app/api/slug)
- Text analysis
  - [Word frequency](mdc:https:/ts-collect.netlify.app/api/wordFrequency)
  - [N-gram generation](mdc:https:/ts-collect.netlify.app/api/ngrams)
  - [Sentiment analysis](mdc:https:/ts-collect.netlify.app/api/sentiment)
- Pattern matching
- String normalization

### Serialization & Export

- Multiple format support
  - [JSON serialization](mdc:https:/ts-collect.netlify.app/api/toJSON)
  - [CSV generation](mdc:https:/ts-collect.netlify.app/api/toCSV)
  - [XML export](mdc:https:/ts-collect.netlify.app/api/toXML)
- Query generation
  - [SQL queries](mdc:https:/ts-collect.netlify.app/api/toSQL)
  - [GraphQL operations](mdc:https:/ts-collect.netlify.app/api/toGraphQL)
- Integration formats
  - [Elasticsearch bulk](mdc:https:/ts-collect.netlify.app/api/toElastic)
  - [Pandas DataFrame](mdc:https:/ts-collect.netlify.app/api/toPandas)
- Custom formatting options

### Streaming & I/O

- Stream operations
  - [Stream creation](mdc:https:/ts-collect.netlify.app/api/stream)
  - [Stream consumption](mdc:https:/ts-collect.netlify.app/api/fromstream)
- [Batch streaming](mdc:https:/ts-collect.netlify.app/api/batch)
- Memory-efficient processing
- Buffered operations

### Advanced Mathematical Operations

- Signal processing
  - [Fast Fourier Transform (FFT)](mdc:https:/ts-collect.netlify.app/api/fft)
  - [Signal interpolation](mdc:https:/ts-collect.netlify.app/api/interpolate)
  - [Convolution operations](mdc:https:/ts-collect.netlify.app/api/convolve)
- Calculus operations
  - [Differentiation](mdc:https:/ts-collect.netlify.app/api/differentiate)
  - [Integration](mdc:https:/ts-collect.netlify.app/api/integrate)
- Numerical methods
- Mathematical optimizations

### Special Data Types Support

- Geographic calculations
  - [Distance computations](mdc:https:/ts-collect.netlify.app/api/geodistance)
  - [Coordinate handling](mdc:https:/ts-collect.netlify.app/api/geodistance)
- Financial operations
  - [Money formatting](mdc:https:/ts-collect.netlify.app/api/money)
  - [Currency handling](mdc:https:/ts-collect.netlify.app/api/money)
- DateTime operations
  - [Formatting](mdc:https:/ts-collect.netlify.app/api/datetime)
  - [Timezone handling](mdc:https:/ts-collect.netlify.app/api/datetime)
- Complex number support
  - Basic operations
  - Advanced computations

### Versioning & History

- Version management
  - [Version tracking](mdc:https:/ts-collect.netlify.app/api/snapshot)
  - [History storage](mdc:https:/ts-collect.netlify.app/api/snapshot)
- Change tracking
  - [Diff generation](mdc:https:/ts-collect.netlify.app/api/diff)
  - [Change detection](mdc:https:/ts-collect.netlify.app/api/diffsummary)
- History operations
  - Rollback support
  - Version comparison

### Development Tools

- Development aids
  - [Playground environment](mdc:https:/ts-collect.netlify.app/api/playground)
  - [Debugging utilities](mdc:https:/ts-collect.netlify.app/api/debug)
- Analysis tools
  - [Pipeline visualization](mdc:https:/ts-collect.netlify.app/api/explain)
  - [Performance benchmarking](mdc:https:/ts-collect.netlify.app/api/benchmark)
- Development modes
  - Debug mode
  - Strict mode

### Utility Features

- System configuration
  - [Configuration management](mdc:https:/ts-collect.netlify.app/api/configure)
  - Environment handling
- Internationalization
  - [Locale support](mdc:https:/ts-collect.netlify.app/api/configure)
  - [Timezone management](mdc:https:/ts-collect.netlify.app/api/datetime)
- Error handling
  - Error modes
  - Exception handling
- Resource management
  - Memory tracking
  - Resource cleanup

## Available Methods

Please note, all of these methods may be chained to fluently manipulate the underlying data:

| API Methods | API Methods | API Methods |
| --- | --- | --- |
| [_aggregate_](mdc:https:/ts-collect.netlify.app/api/aggregate) | [_all_](mdc:https:/ts-collect.netlify.app/api/all) | [_as_](mdc:https:/ts-collect.netlify.app/api/as) |
| [_assertValid_](mdc:https:/ts-collect.netlify.app/api/assertValid) | [_avg_](mdc:https:/ts-collect.netlify.app/api/avg) | [_batch_](mdc:https:/ts-collect.netlify.app/api/batch) |
| [_benchmark_](mdc:https:/ts-collect.netlify.app/api/benchmark) | [_cache_](mdc:https:/ts-collect.netlify.app/api/cache) | [_cartesianProduct_](mdc:https:/ts-collect.netlify.app/api/cartesianProduct) |
| [_cast_](mdc:https:/ts-collect.netlify.app/api/cast) | [_chunk_](mdc:https:/ts-collect.netlify.app/api/chunk) | [_collapse_](mdc:https:/ts-collect.netlify.app/api/collapse) |
| [_combine_](mdc:https:/ts-collect.netlify.app/api/combine) | [_configure_](mdc:https:/ts-collect.netlify.app/api/configure) | [_contains_](mdc:https:/ts-collect.netlify.app/api/contains) |
| [_containsAll_](mdc:https:/ts-collect.netlify.app/api/containsAll) | [_containsOneItem_](mdc:https:/ts-collect.netlify.app/api/containsOneItem) | [_convolve_](mdc:https:/ts-collect.netlify.app/api/convolve) |
| [_correlate_](mdc:https:/ts-collect.netlify.app/api/correlate) | [_count_](mdc:https:/ts-collect.netlify.app/api/count) | [_countBy_](mdc:https:/ts-collect.netlify.app/api/countBy) |
| [_crossJoin_](mdc:https:/ts-collect.netlify.app/api/crossJoin) | [_cursor_](mdc:https:/ts-collect.netlify.app/api/cursor) | [_dateTime_](mdc:https:/ts-collect.netlify.app/api/dateTime) |
| [_debug_](mdc:https:/ts-collect.netlify.app/api/debug) | [_dd_](mdc:https:/ts-collect.netlify.app/api/dd) | [_describe_](mdc:https:/ts-collect.netlify.app/api/describe) |
| [_detectAnomalies_](mdc:https:/ts-collect.netlify.app/api/detectAnomalies) | [_differentiate_](mdc:https:/ts-collect.netlify.app/api/differentiate) | [_diffAssoc_](mdc:https:/ts-collect.netlify.app/api/diffAssoc) |
| [_diffKeys_](mdc:https:/ts-collect.netlify.app/api/diffKeys) | [_diffUsing_](mdc:https:/ts-collect.netlify.app/api/diffUsing) | [_doesntContain_](mdc:https:/ts-collect.netlify.app/api/doesntContain) |
| [_dump_](mdc:https:/ts-collect.netlify.app/api/dump) | [_duplicates_](mdc:https:/ts-collect.netlify.app/api/duplicates) | [_each_](mdc:https:/ts-collect.netlify.app/api/each) |
| [_eachSpread_](mdc:https:/ts-collect.netlify.app/api/eachSpread) | [_entropy_](mdc:https:/ts-collect.netlify.app/api/entropy) | [_everyAsync_](mdc:https:/ts-collect.netlify.app/api/everyAsync) |
| [_explain_](mdc:https:/ts-collect.netlify.app/api/explain) | [_except_](mdc:https:/ts-collect.netlify.app/api/except) | [_fft_](mdc:https:/ts-collect.netlify.app/api/fft) |
| [_filter_](mdc:https:/ts-collect.netlify.app/api/filter) | [_filterAsync_](mdc:https:/ts-collect.netlify.app/api/filterAsync) | [_first_](mdc:https:/ts-collect.netlify.app/api/first) |
| [_firstOrFail_](mdc:https:/ts-collect.netlify.app/api/firstOrFail) | [_firstWhere_](mdc:https:/ts-collect.netlify.app/api/firstWhere) | [_flatten_](mdc:https:/ts-collect.netlify.app/api/flatten) |
| [_flatMap_](mdc:https:/ts-collect.netlify.app/api/flatMap) | [_flip_](mdc:https:/ts-collect.netlify.app/api/flip) | [_forPage_](mdc:https:/ts-collect.netlify.app/api/forPage) |
| [_forecast_](mdc:https:/ts-collect.netlify.app/api/forecast) | [_forget_](mdc:https:/ts-collect.netlify.app/api/forget) | [_fromStream_](mdc:https:/ts-collect.netlify.app/api/fromStream) |
| [_fuzzyMatch_](mdc:https:/ts-collect.netlify.app/api/fuzzyMatch) | [_geoDistance_](mdc:https:/ts-collect.netlify.app/api/geoDistance) | [_get_](mdc:https:/ts-collect.netlify.app/api/get) |
| [_groupBy_](mdc:https:/ts-collect.netlify.app/api/groupBy) | [_groupByMultiple_](mdc:https:/ts-collect.netlify.app/api/groupByMultiple) | [_has_](mdc:https:/ts-collect.netlify.app/api/has) |
| [_having_](mdc:https:/ts-collect.netlify.app/api/having) | [_impute_](mdc:https:/ts-collect.netlify.app/api/impute) | [_implode_](mdc:https:/ts-collect.netlify.app/api/implode) |
| [_index_](mdc:https:/ts-collect.netlify.app/api/index) | [_instrument_](mdc:https:/ts-collect.netlify.app/api/instrument) | [_integrate_](mdc:https:/ts-collect.netlify.app/api/integrate) |
| [_intersect_](mdc:https:/ts-collect.netlify.app/api/intersect) | [_isEmpty_](mdc:https:/ts-collect.netlify.app/api/isEmpty) | [_isNotEmpty_](mdc:https:/ts-collect.netlify.app/api/isNotEmpty) |
| [_join_](mdc:https:/ts-collect.netlify.app/api/join) | [_kmeans_](mdc:https:/ts-collect.netlify.app/api/kmeans) | [_keyBy_](mdc:https:/ts-collect.netlify.app/api/keyBy) |
| [_keys_](mdc:https:/ts-collect.netlify.app/api/keys) | [_knn_](mdc:https:/ts-collect.netlify.app/api/knn) | [_kurtosis_](mdc:https:/ts-collect.netlify.app/api/kurtosis) |
| [_last_](mdc:https:/ts-collect.netlify.app/api/last) | [_lazy_](mdc:https:/ts-collect.netlify.app/api/lazy) | [_leftJoin_](mdc:https:/ts-collect.netlify.app/api/leftJoin) |
| [_linearRegression_](mdc:https:/ts-collect.netlify.app/api/linearRegression) | [_lower_](mdc:https:/ts-collect.netlify.app/api/lower) | [_macro_](mdc:https:/ts-collect.netlify.app/api/macro) |
| [_make_](mdc:https:/ts-collect.netlify.app/api/make) | [_map_](mdc:https:/ts-collect.netlify.app/api/map) | [_mapAsync_](mdc:https:/ts-collect.netlify.app/api/mapAsync) |
| [_mapInto_](mdc:https:/ts-collect.netlify.app/api/mapInto) | [_mapOption_](mdc:https:/ts-collect.netlify.app/api/mapOption) | [_mapSpread_](mdc:https:/ts-collect.netlify.app/api/mapSpread) |
| [_mapToDictionary_](mdc:https:/ts-collect.netlify.app/api/mapToDictionary) | [_mapToGroups_](mdc:https:/ts-collect.netlify.app/api/mapToGroups) | [_mapUntil_](mdc:https:/ts-collect.netlify.app/api/mapUntil) |
| [_mapWithKeys_](mdc:https:/ts-collect.netlify.app/api/mapWithKeys) | [_max_](mdc:https:/ts-collect.netlify.app/api/max) | [_median_](mdc:https:/ts-collect.netlify.app/api/median) |
| [_memoize_](mdc:https:/ts-collect.netlify.app/api/memoize) | [_merge_](mdc:https:/ts-collect.netlify.app/api/merge) | [_mergeRecursive_](mdc:https:/ts-collect.netlify.app/api/mergeRecursive) |
| [_metrics_](mdc:https:/ts-collect.netlify.app/api/metrics) | [_min_](mdc:https:/ts-collect.netlify.app/api/min) | [_mode_](mdc:https:/ts-collect.netlify.app/api/mode) |
| [_money_](mdc:https:/ts-collect.netlify.app/api/money) | [_movingAverage_](mdc:https:/ts-collect.netlify.app/api/movingAverage) | [_naiveBayes_](mdc:https:/ts-collect.netlify.app/api/naiveBayes) |
| [_ngrams_](mdc:https:/ts-collect.netlify.app/api/ngrams) | [_nth_](mdc:https:/ts-collect.netlify.app/api/nth) | [_normalize_](mdc:https:/ts-collect.netlify.app/api/normalize) |
| [_omit_](mdc:https:/ts-collect.netlify.app/api/omit) | [_only_](mdc:https:/ts-collect.netlify.app/api/only) | [_optimize_](mdc:https:/ts-collect.netlify.app/api/optimize) |
| [_outliers_](mdc:https:/ts-collect.netlify.app/api/outliers) | [_pad_](mdc:https:/ts-collect.netlify.app/api/pad) | [_paginate_](mdc:https:/ts-collect.netlify.app/api/paginate) |
| [_parallel_](mdc:https:/ts-collect.netlify.app/api/parallel) | [_partition_](mdc:https:/ts-collect.netlify.app/api/partition) | [_percentile_](mdc:https:/ts-collect.netlify.app/api/percentile) |
| [_pick_](mdc:https:/ts-collect.netlify.app/api/pick) | [_pipe_](mdc:https:/ts-collect.netlify.app/api/pipe) | [_pivot_](mdc:https:/ts-collect.netlify.app/api/pivot) |
| [_pivotTable_](mdc:https:/ts-collect.netlify.app/api/pivotTable) | [_pop_](mdc:https:/ts-collect.netlify.app/api/pop) | [_power_](mdc:https:/ts-collect.netlify.app/api/power) |
| [_prefetch_](mdc:https:/ts-collect.netlify.app/api/prefetch) | [_prepend_](mdc:https:/ts-collect.netlify.app/api/prepend) | [_product_](mdc:https:/ts-collect.netlify.app/api/product) |
| [_profile_](mdc:https:/ts-collect.netlify.app/api/profile) | [_pull_](mdc:https:/ts-collect.netlify.app/api/pull) | [_push_](mdc:https:/ts-collect.netlify.app/api/push) |
| [_put_](mdc:https:/ts-collect.netlify.app/api/put) | [_query_](mdc:https:/ts-collect.netlify.app/api/query) | [_random_](mdc:https:/ts-collect.netlify.app/api/random) |
| [_reduce_](mdc:https:/ts-collect.netlify.app/api/reduce) | [_reduceAsync_](mdc:https:/ts-collect.netlify.app/api/reduceAsync) | [_reject_](mdc:https:/ts-collect.netlify.app/api/reject) |
| [_removeOutliers_](mdc:https:/ts-collect.netlify.app/api/removeOutliers) | [_replace_](mdc:https:/ts-collect.netlify.app/api/replace) | [_replaceRecursive_](mdc:https:/ts-collect.netlify.app/api/replaceRecursive) |
| [_reverse_](mdc:https:/ts-collect.netlify.app/api/reverse) | [_sanitize_](mdc:https:/ts-collect.netlify.app/api/sanitize) | [_scan_](mdc:https:/ts-collect.netlify.app/api/scan) |
| [_search_](mdc:https:/ts-collect.netlify.app/api/search) | [_seasonality_](mdc:https:/ts-collect.netlify.app/api/seasonality) | [_sentiment_](mdc:https:/ts-collect.netlify.app/api/sentiment) |
| [_shift_](mdc:https:/ts-collect.netlify.app/api/shift) | [_shuffle_](mdc:https:/ts-collect.netlify.app/api/shuffle) | [_skip_](mdc:https:/ts-collect.netlify.app/api/skip) |
| [_skipUntil_](mdc:https:/ts-collect.netlify.app/api/skipUntil) | [_skipWhile_](mdc:https:/ts-collect.netlify.app/api/skipWhile) | [_slice_](mdc:https:/ts-collect.netlify.app/api/slice) |
| [_slug_](mdc:https:/ts-collect.netlify.app/api/slug) | [_sole_](mdc:https:/ts-collect.netlify.app/api/sole) | [_someAsync_](mdc:https:/ts-collect.netlify.app/api/someAsync) |
| [_sort_](mdc:https:/ts-collect.netlify.app/api/sort) | [_sortBy_](mdc:https:/ts-collect.netlify.app/api/sortBy) | [_sortByDesc_](mdc:https:/ts-collect.netlify.app/api/sortByDesc) |
| [_sortDesc_](mdc:https:/ts-collect.netlify.app/api/sortDesc) | [_sortKeys_](mdc:https:/ts-collect.netlify.app/api/sortKeys) | [_sortKeysDesc_](mdc:https:/ts-collect.netlify.app/api/sortKeysDesc) |
| [_splice_](mdc:https:/ts-collect.netlify.app/api/splice) | [_split_](mdc:https:/ts-collect.netlify.app/api/split) | [_standardDeviation_](mdc:https:/ts-collect.netlify.app/api/standardDeviation) |
| [_stream_](mdc:https:/ts-collect.netlify.app/api/stream) | [_sum_](mdc:https:/ts-collect.netlify.app/api/sum) | [_symmetricDiff_](mdc:https:/ts-collect.netlify.app/api/symmetricDiff) |
| [_tap_](mdc:https:/ts-collect.netlify.app/api/tap) | [_take_](mdc:https:/ts-collect.netlify.app/api/take) | [_takeUntil_](mdc:https:/ts-collect.netlify.app/api/takeUntil) |
| [_takeWhile_](mdc:https:/ts-collect.netlify.app/api/takeWhile) | [_timeSeries_](mdc:https:/ts-collect.netlify.app/api/timeSeries) | [_times_](mdc:https:/ts-collect.netlify.app/api/times) |
| [_toArray_](mdc:https:/ts-collect.netlify.app/api/toArray) | [_toCSV_](mdc:https:/ts-collect.netlify.app/api/toCSV) | [_toElastic_](mdc:https:/ts-collect.netlify.app/api/toElastic) |
| [_toGraphQL_](mdc:https:/ts-collect.netlify.app/api/toGraphQL) | [_toJSON_](mdc:https:/ts-collect.netlify.app/api/toJSON) | [_toMap_](mdc:https:/ts-collect.netlify.app/api/toMap) |
| [_toPandas_](mdc:https:/ts-collect.netlify.app/api/toPandas) | [_toSet_](mdc:https:/ts-collect.netlify.app/api/toSet) | [_toSQL_](mdc:https:/ts-collect.netlify.app/api/toSQL) |
| [_toXML_](mdc:https:/ts-collect.netlify.app/api/toXML) | [_transform_](mdc:https:/ts-collect.netlify.app/api/transform) | [_trend_](mdc:https:/ts-collect.netlify.app/api/trend) |
| [_union_](mdc:https:/ts-collect.netlify.app/api/union) | [_unless_](mdc:https:/ts-collect.netlify.app/api/unless) | [_unlessEmpty_](mdc:https:/ts-collect.netlify.app/api/unlessEmpty) |
| [_unlessNotEmpty_](mdc:https:/ts-collect.netlify.app/api/unlessNotEmpty) | [_unfold_](mdc:https:/ts-collect.netlify.app/api/unfold) | [_unwrap_](mdc:https:/ts-collect.netlify.app/api/unwrap) |
| [_upper_](mdc:https:/ts-collect.netlify.app/api/upper) | [_validate_](mdc:https:/ts-collect.netlify.app/api/validate) | [_validateSync_](mdc:https:/ts-collect.netlify.app/api/validateSync) |
| [_values_](mdc:https:/ts-collect.netlify.app/api/values) | [_variance_](mdc:https:/ts-collect.netlify.app/api/variance) | [_when_](mdc:https:/ts-collect.netlify.app/api/when) |
| [_whenEmpty_](mdc:https:/ts-collect.netlify.app/api/whenEmpty) | [_whenNotEmpty_](mdc:https:/ts-collect.netlify.app/api/whenNotEmpty) | [_where_](mdc:https:/ts-collect.netlify.app/api/where) |
| [_whereBetween_](mdc:https:/ts-collect.netlify.app/api/whereBetween) | [_whereIn_](mdc:https:/ts-collect.netlify.app/api/whereIn) | [_whereInstanceOf_](mdc:https:/ts-collect.netlify.app/api/whereInstanceOf) |
| [_whereLike_](mdc:https:/ts-collect.netlify.app/api/whereLike) | [_whereNotBetween_](mdc:https:/ts-collect.netlify.app/api/whereNotBetween) | [_whereNotIn_](mdc:https:/ts-collect.netlify.app/api/whereNotIn) |
| [_whereNotNull_](mdc:https:/ts-collect.netlify.app/api/whereNotNull) | [_whereNull_](mdc:https:/ts-collect.netlify.app/api/whereNull) | [_whereRegex_](mdc:https:/ts-collect.netlify.app/api/whereRegex) |
| [_wordFrequency_](mdc:https:/ts-collect.netlify.app/api/wordFrequency) | [_wrap_](mdc:https:/ts-collect.netlify.app/api/wrap) | [_zscore_](mdc:https:/ts-collect.netlify.app/api/zscore) |

## Get Started

```bash
bun install ts-collect
```

## Usage

### Basic Collection Operations

```typescript
import { collect } from 'ts-collect'

// Create a collection
const collection = collect([1, 2, 3, 4, 5])

// Basic operations with chaining
const result = collection
  .map(n => n * 2) // [2, 4, 6, 8, 10]
  .filter(n => n > 5) // [6, 8, 10]
  .take(2) // [6, 8]
  .toArray()

// Unique values with custom key
const users = collect([
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'admin' }
])
const uniqueRoles = users.unique('role') // [{ id: 1, role: 'admin' }, { id: 2, role: 'user' }]

// Chunk data into smaller arrays
const chunks = collection.chunk(2) // [[1, 2], [3, 4], [5]]

// Find elements
const first = collection.first() // 1
const last = collection.last() // 5
const secondItem = collection.nth(1) // 2

// all() - Get all items as array
const items = collection.all() // [1, 2, 3, 4, 5]

// average/avg - Calculate average of items
collection.average() // 3
collection.avg() // 3

// chunk - Split collection into smaller collections
collection.chunk(2) // [[1, 2], [3, 4], [5]]

// collapse - Flatten a collection of arrays
const nested = collect([[1, 2], [3, 4], [5]])
nested.collapse() // [1, 2, 3, 4, 5]

// combine - Create collection by combining arrays
const keys = collect(['name', 'age'])
const values = ['John', 25]
keys.combine(values) // { name: 'John', age: 25 }

// contains/containsOneItem - Check for item existence
collection.contains(3) // true
collection.containsOneItem() // false

// countBy - Count occurrences by value
const items = collect(['apple', 'banana', 'apple', 'orange'])
items.countBy() // Map { 'apple' => 2, 'banana' => 1, 'orange' => 1 }

// diff/diffAssoc/diffKeys - Find differences between collections
const col1 = collect([1, 2, 3])
const col2 = collect([2, 3, 4])
col1.diff(col2) // [1]

// dd/dump - Dump collection and die or just dump
collection.dump() // Console logs items
collection.dd() // Console logs and exits

// each/eachSpread - Iterate over items
collection.each(item => console.log(item))
collection.eachSpread((a, b) => console.log(a, b)) // For array items

// except/only - Get all items except/only specified keys
const user = collect({ id: 1, name: 'John', age: 25 })
user.except('age') // { id: 1, name: 'John' }
user.only('name', 'age') // { name: 'John', age: 25 }

// firstOrFail - Get first item or throw
collection.firstOrFail() // 1 or throws if empty

// firstWhere - Get first item matching criteria
const users = collect([
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
])
users.firstWhere('name', 'Jane') // { id: 2, name: 'Jane' }

// flip - Swap keys and values
const flipped = collect({ name: 'John' }).flip() // { John: 'name' }

// forget - Remove an item by key
const array = collect(['a', 'b', 'c'])
array.forget(1) // ['a', 'c']

// has/get - Check key existence / Get value
const item = collect({ name: 'John' })
item.has('name') // true
item.get('name') // 'John'

// mapInto - Map items into new class instances
class User {
  name: string = ''
  greet() { return `Hello ${this.name}` }
}
collect([{ name: 'John' }])
  .mapInto(User)
  .first()
  .greet() // "Hello John"

// prepend/push/put - Add items
collection.prepend(0) // [0, 1, 2, 3, 4, 5]
collection.push(6) // [1, 2, 3, 4, 5, 6]
collection.put('key', 'value') // Adds/updates key-value

// random - Get random item(s)
collection.random() // Random item
collection.random(2) // Array of 2 random items

// skip/skipUntil/skipWhile - Skip items
collection.skip(2) // [3, 4, 5]
collection.skipUntil(3) // [3, 4, 5]
collection.skipWhile(n => n < 3) // [3, 4, 5]

// sole - Get only item in single-item collection
collect([1]).sole() // 1 (throws if not exactly one item)

// take/takeUntil/takeWhile - Take items
collection.take(2) // [1, 2]
collection.takeUntil(3) // [1, 2]
collection.takeWhile(n => n < 3) // [1, 2]

// when/unless - Conditional execution
collection
  .when(true, col => col.take(3))
  .unless(false, col => col.take(2))

// wrap/unwrap - Wrap/unwrap value in collection
collect().wrap([1, 2, 3]) // Collection([1, 2, 3])
collection.unwrap() // [1, 2, 3]
```

### Working with Objects

```typescript
interface User {
  id: number
  name: string
  role: string
}

const users: User[] = [
  { id: 1, name: 'John', role: 'admin' },
  { id: 2, name: 'Jane', role: 'user' },
  { id: 3, name: 'Bob', role: 'user' }
]

const collection = collect(users)

// Group by a key
const byRole = collection.groupBy('role')
// Map { 'admin' => [{ id: 1, ... }], 'user' => [{ id: 2, ... }, { id: 3, ... }] }

// Pluck specific values
const names = collection.pluck('name')
// ['John', 'Jane', 'Bob']

// Find where
const admins = collection.where('role', 'admin')
// [{ id: 1, name: 'John', role: 'admin' }]
```

### Advanced Array & Object Operations

```typescript
interface User {
  id: number
  name: string
  role: string
  department: string
  salary: number
  joinedAt: Date
}

const users: User[] = [
  {
    id: 1,
    name: 'John',
    role: 'admin',
    department: 'IT',
    salary: 80000,
    joinedAt: new Date('2023-01-15')
  },
  {
    id: 2,
    name: 'Jane',
    role: 'manager',
    department: 'Sales',
    salary: 90000,
    joinedAt: new Date('2023-03-20')
  },
  {
    id: 3,
    name: 'Bob',
    role: 'developer',
    department: 'IT',
    salary: 75000,
    joinedAt: new Date('2023-06-10')
  }
]

const collection = collect(users)

// Complex grouping by multiple fields
const groupedUsers = collection.groupByMultiple('department', 'role')
// Map {
//   'IT::admin' => [{ id: 1, ... }],
//   'Sales::manager' => [{ id: 2, ... }],
//   'IT::developer' => [{ id: 3, ... }]
// }

// Advanced filtering combinations
const seniorITStaff = collection
  .where('department', 'IT')
  .filter((user) => {
    const monthsEmployed = (new Date().getTime() - user.joinedAt.getTime()) / (1000 * 60 * 60 * 24 * 30)
    return monthsEmployed > 6
  })
  .whereBetween('salary', 70000, 85000)
  .toArray()

// Sort by multiple fields
const sorted = collection
  .sortBy('department')
  .sortBy('salary', 'desc')
  .toArray()

// Transform data structure
const transformed = collection.transform<{ fullName: string, info: string }>({
  fullName: user => user.name,
  info: user => `${user.role} in ${user.department}`
})

// Pagination
const page = collection.paginate(2, 1) // 2 items per page, first page
// {
//   data: [...],
//   total: 3,
//   perPage: 2,
//   currentPage: 1,
//   lastPage: 2,
//   hasMorePages: true
// }
```

### Advanced Filtering & Pattern Matching

```typescript
interface Product {
  id: number
  name: string
  description: string
  price: number
  categories: string[]
  inStock: boolean
}

const products = collect<Product>([
  {
    id: 1,
    name: 'Premium Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1299.99,
    categories: ['electronics', 'computers'],
    inStock: true
  },
  // ... more products
])

// Fuzzy search
const searchResults = products.fuzzyMatch('name', 'laptop', 0.8)

// Regular expression matching
const matched = products.whereRegex('description', /\d+GB/)

// Complex conditional filtering
const filtered = products
  .when(true, collection =>
    collection.filter(p => p.price > 1000))
  .unless(false, collection =>
    collection.filter(p => p.inStock))

// Pattern matching with whereLike
const pattern = products.whereLike('name', '%Laptop%')
```

### Statistical Operations

```typescript
const numbers = collect([1, 2, 3, 4, 5, 6])

numbers.sum() // 21
numbers.avg() // 3.5
numbers.median() // 3.5
numbers.min() // 1
numbers.max() // 6
numbers.standardDeviation() // { population: 1.707825127659933, sample: 1.8708286933869707 }
```

### Time Series Data

```typescript
const timeData = [
  { date: '2024-01-01', value: 100 },
  { date: '2024-01-02', value: 150 },
  { date: '2024-01-03', value: 120 }
]

const series = collect(timeData).timeSeries({
  dateField: 'date',
  valueField: 'value',
  interval: 'day'
})

// Calculate moving average
const movingAvg = series.movingAverage({ window: 2 })
```

### Lazy Evaluation

```typescript
const huge = collect(Array.from({ length: 1000000 }, (_, i) => i))

// Operations are deferred until needed
const result = huge
  .lazy()
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .take(5)
  .toArray()
```

### Async Operations & Batch Processing

```typescript
// Process large datasets in batches
const largeDataset = collect(Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  data: `Data ${i}`
})))

// Parallel processing with batches
await largeDataset.parallel(
  async (batch) => {
    const processed = await processItems(batch)
    return processed
  },
  { chunks: 4, maxConcurrency: 2 }
)

// Async mapping
const asyncMapped = await largeDataset
  .mapAsync(async (item) => {
    const result = await fetchDataForItem(item)
    return { ...item, ...result }
  })

// Batch processing with cursor
for await (const batch of largeDataset.cursor(100)) {
  await processBatch(batch)
}
```

### Data Validation & Sanitization

```typescript
interface UserData {
  email: string
  age: number
  username: string
}

const userData = collect<UserData>([
  { email: 'john@example.com', age: 25, username: 'john_doe' },
  { email: 'invalid-email', age: -5, username: 'admin' }
])

// Validate data
const validationResult = await userData.validate({
  email: [
    email => /^[^@]+@[^@][^.@]*\.[^@]+$/.test(email),
    email => email.length <= 255
  ],
  age: [
    age => age >= 0,
    age => age <= 120
  ],
  username: [
    username => username.length >= 3,
    username => /^\w+$/.test(username)
  ]
})

// Sanitize data
const sanitized = userData.sanitize({
  email: email => email.toLowerCase().trim(),
  age: age => Math.max(0, Math.min(120, age)),
  username: username => username.toLowerCase().replace(/\W/g, '')
})
```

### Data Analysis & Statistics

```typescript
interface SalesData {
  product: string
  revenue: number
  cost: number
  date: string
  region: string
}

const sales: SalesData[] = [
  { product: 'A', revenue: 100, cost: 50, date: '2024-01-01', region: 'North' },
  { product: 'B', revenue: 200, cost: 80, date: '2024-01-01', region: 'South' },
  { product: 'A', revenue: 150, cost: 60, date: '2024-01-02', region: 'North' },
  { product: 'B', revenue: 180, cost: 75, date: '2024-01-02', region: 'South' },
]

const salesCollection = collect(sales)

// Advanced statistical analysis
const stats = salesCollection
  .describe('revenue') // Get statistical summary
  .pluck('revenue')
  .pipe(numbers => ({
    sum: numbers.sum(),
    average: numbers.avg(),
    median: numbers.median(),
    stdDev: numbers.standardDeviation(),
    variance: numbers.variance()
  }))

// Pivot table analysis
const pivotData = salesCollection.pivotTable(
  'product', // rows
  'region', // columns
  'revenue', // values
  'sum' // aggregation method
)

// Time series analysis with moving averages
const timeSeries = salesCollection
  .timeSeries({
    dateField: 'date',
    valueField: 'revenue',
    interval: 'day'
  })
  .movingAverage({ window: 2, centered: true })

// Correlation analysis
const correlation = salesCollection.correlate('revenue', 'cost')

// Detect anomalies in revenue
const anomalies = salesCollection.detectAnomalies({
  method: 'zscore',
  threshold: 2,
  features: ['revenue']
})
```

### Performance Optimization

```typescript
// Cache expensive operations
const cached = collection
  .map(expensiveOperation)
  .cache(60000) // Cache for 60 seconds

// Lazy evaluation for large datasets
const lazy = collection
  .lazy()
  .filter(predicate)
  .map(transform)
  .take(10)

// Optimize queries with indexing
const indexed = collection
  .index(['id', 'category'])
  .where('category', 'electronics')
  .where('id', 123)

// Profile performance
const metrics = await collection.profile()
// { time: 123, memory: 456 }

// Instrumentation
collection
  .instrument(stats => console.log('Operation stats:', stats))
  .map(transform)
  .filter(predicate)
```

### Advanced Serialization

```typescript
// Export to different formats
const json = collection.toJSON({ pretty: true })
const csv = collection.toCSV()
const xml = collection.toXML()

// SQL generation
const sql = collection.toSQL('users')

// GraphQL query generation
const graphql = collection.toGraphQL('User')

// Elasticsearch bulk format
const elastic = collection.toElastic('users')

// Pandas DataFrame generation
const pandas = collection.toPandas()
```

### Type Safety

```typescript
interface Product {
  id: number
  name: string
  price: number
}

// Collection is fully typed
const products = collect<Product>([
  { id: 1, name: 'Widget', price: 9.99 }
])

// TypeScript will catch errors
products.where('invalid', 'value') // Type error!
```

For more detailed documentation and examples, please visit our documentation site.