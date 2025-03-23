---
description: "Guidelines for arrayfun"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Array Manipulation","Function Application","Data Processing","Error Handling","N-dimensional Arrays"]
__meta__rate: 7
---

 Usage

The arrayfun function is used to apply a function handle to
each element of an input array (or arrays), and to collect
the outputs into an array. The general syntax for its use is

     y = arrayfun(fun, x)

where x is an N-dimensional array. In this case, each
element of the output y_i is defined as fun(x_i). You can
also supply multiple arguments to arrayfun, provided all of
the arguments are the same size

     y = arrayfun(fun, x, z,...)

in which case each output y_i = fun(x_i,z_i,...).
If the function returns multiple outputs, then arrayfun can
be called with multiple outputs, in which case each output
goes to a separate array output

     [y1,y2,...] = arrayfun(fun, x, z, ...)

The assumption is that the output types for each call to fun
is the same across the inputs.
Finally, some hints can be provided to arrayfun using the
syntax

     [y1,y2,...] = arrayfun(fun, x, z, ..., 'param', value,
  'param', value)

where param and value take on the following possible values:

* 'UniformOutput' - if the value is true then each output of
  fun must be a scalar, and the outputs are concatenated
  into an array the same size as the input arrays. If the
  value is false then the outputs are encapsulated into a
  cell array, with each entry in the cell array containing
  the call to fun(x_i,z_i,...).
* 'ErrorHandler' - in this case value is a function handle
  that gets called when fun throws an error. If
  'ErrorHandler' is not specified, then arrayfun allows the
  error to propogate (i.e., and exception is thrown).


* FreeMat_Documentation
* Array_Generation_and_Manipulations
* Generated on Thu Jul 25 2013 17:17:13 for FreeMat by
  doxygen_ 1.8.1.1

