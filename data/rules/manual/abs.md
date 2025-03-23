---
description: "Guidelines for abs"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Numerical Computing","Complex Numbers","Data Types","FreeMat"]
__meta__rate: 7
---

 Usage

Returns the absolute value of the input array for all
elements. The general syntax for its use is

     y = abs(x)

where x is an n-dimensional array of numerical type. The
output is the same numerical type as the input, unless the
input is complex or dcomplex. For complex inputs, the
absolute value is a floating point array, so that the return
type is float. For dcomplex inputs, the absolute value is a
double precision floating point array, so that the return
type is double.


 Example

The following demonstrates the abs applied to a complex
scalar.

  --> abs(3+4*i)

  ans =
   5

The abs function applied to integer and real values:

  --> abs([-2,3,-4,5])

  ans =
   2 3 4 5

For a double-precision complex array,

  --> abs([2.0+3.0*i,i])

  ans =
      3.6056    1.0000


* FreeMat_Documentation
* Elementary_Functions
* Generated on Thu Jul 25 2013 17:17:14 for FreeMat by
  doxygen_ 1.8.1.1

