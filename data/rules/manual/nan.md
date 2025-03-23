---
description: "Guidelines for nan"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Floating Point","Arithmetic Operations","Data Types","NaN","FreeMat"]
__meta__rate: 7
---

 Usage

Returns a value that represents ``not-a-number'' for both 32
and 64-bit floating point values. This constant is meant to
represent the result of arithmetic operations whose output
cannot be meaningfully defined (like zero divided by zero).
There are several forms for the NaN function. The first form
returns a double precision NaN.

     y = nan

The next form takes a class name that can be either 'double'

     y = nan('double')

or 'single':

     y = nan('single')

With a single parameter it generates a square matrix of
nans.

     y = nan(n)

Alternatively, you can specify the dimensions of the array
via

     y = nan(m,n,p,...)

or

     y = nan([m,n,p,...])

Finally, you can add a classname of either 'single' or
'double'.


 Example

The following examples demonstrate a few calculations with
the not-a-number constant.

  --> nan*0

  ans =
   NaN

  --> nan-nan

  ans =
   NaN

Note that NaNs are preserved under type conversion to
floating point types (i.e., float, double, complex and
dcomplex types), but not integer types.

  --> uint32(nan)

  ans =
   0

  --> complex(nan)

  ans =
   NaN


* FreeMat_Documentation
* Array_Generation_and_Manipulations
* Generated on Thu Jul 25 2013 17:17:13 for FreeMat by
  doxygen_ 1.8.1.1

