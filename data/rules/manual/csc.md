---
description: "Guidelines for csc"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Numerical Computing","Trigonometry","Array Operations","FreeMat"]
__meta__rate: 7
---

 Usage

Computes the csc function for its argument. The general
syntax for its use is

    y = csc(x)

where x is an n-dimensional array of numerical type. Integer
types are promoted to the double type prior to calculation
of the csc function. Output y is of the same size and type
as the input x, (unless x is an integer, in which case y is
a double type).


 Internals

Mathematically, the csc function is defined for all
arguments as
 \[ \csc x \equiv \frac{1}{\sin x}. \]


 Example

The following piece of code plots the real-valued csc(2 pi
x) function over the interval of [-1,1]:

  --> t = linspace(-1,1,1000);
  --> plot(t,csc(2*pi*t))
  --> axis([-1,1,-10,10]);

 cscplot.png

* FreeMat_Documentation
* Mathematical_Functions
* Generated on Thu Jul 25 2013 17:17:42 for FreeMat by
  doxygen_ 1.8.1.1

