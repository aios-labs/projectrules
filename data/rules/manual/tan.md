---
description: "Guidelines for tan"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Numerical Computing","Trigonometry","Programming","FreeMat"]
__meta__rate: 7
---

 Usage

Computes the tan function for its argument. The general
syntax for its use is

    y = tan(x)

where x is an n-dimensional array of numerical type. Integer
types are promoted to the double type prior to calculation
of the tan function. Output y is of the same size and type
as the input x, (unless x is an integer, in which case y is
a double type).


 Internals

Mathematically, the tan function is defined for all real
valued arguments x by the infinite summation
 \[ \tan x \equiv x + \frac{x^3}{3} + \frac{2x^5}{15} +
\cdots, \]
or alternately by the ratio
 \[ \tan x \equiv \frac{\sin x}{\cos x} \]
For complex valued arguments z, the tangent is computed via
 \[ \tan z \equiv \frac{\sin 2 \Re z + i \sinh 2 \Im z}
{\cos 2 \Re z + \cosh 2 \Im z}. \]


 Example

The following piece of code plots the real-valued tan(x)
function over the interval [-1,1]:

  --> t = linspace(-1,1);
  --> plot(t,tan(t))

 tanplot.png

* FreeMat_Documentation
* Mathematical_Functions
* Generated on Thu Jul 25 2013 17:17:45 for FreeMat by
  doxygen_ 1.8.1.1

