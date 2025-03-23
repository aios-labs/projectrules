---
description: "Guidelines for inf"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Floating Point","Infinity","Mathematics","Programming","Constants"]
__meta__rate: 7
---

 Usage

Returns a value that represents positive infinity for both
32 and 64-bit floating point values. There are several forms
for the Inf function. The first form returns a double
precision Inf.

     y = inf

The next form takes a class name that can be either 'double'

     y = inf('double')

or 'single':

     y = inf('single')

With a single parameter it generates a square matrix of
infs.

     y = inf(n)

Alternatively, you can specify the dimensions of the array
via

     y = inf(m,n,p,...)

or

     y = inf([m,n,p,...])

Finally, you can add a classname of either 'single' or
'double'.


 Internals

The infinity constant has several interesting properties. In
particular:
 \[ \begin{array}{ll} \infty \times 0 &amp; = \mathrm{NaN}
\\ \infty \times a &amp; = \infty \, \mathrm{for all} \, a >
0 \\ \infty \times a &amp; = -\infty \, \mathrm{for all} \,
a < 0 \\ \infty / \infty &amp; = \mathrm{NaN} \\ \infty / 0
&amp; = \infty \end{array} \]
Note that infinities are not preserved under type conversion
to integer types (see the examples below).


 Example

The following examples demonstrate the various properties of
the infinity constant.

  --> inf*0

  ans =
   NaN

  --> inf*2

  ans =
   Inf

  --> inf*-2

  ans =
   -Inf

  --> inf/inf

  ans =
   NaN

  --> inf/0

  ans =
   Inf

  --> inf/nan

  ans =
   NaN

Note that infinities are preserved under type conversion to
floating point types (i.e., float, double, complex and
dcomplex types), but not integer types.

  --> uint32(inf)

  ans =
   4294967295

  --> complex(inf)

  ans =
   Inf


* FreeMat_Documentation
* Base_Constants
* Generated on Thu Jul 25 2013 17:17:13 for FreeMat by
  doxygen_ 1.8.1.1

