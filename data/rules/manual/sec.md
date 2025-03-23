---
description: "Guidelines for sec"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematical Functions","Numerical Computing","Array Operations"]
__meta__rate: 7
---

 Usage

Computes the sec function for its argument. The general
syntax for its use is

    y = sec(x)

where x is an n-dimensional array of numerical type. Integer
types are promoted to the double type prior to calculation
of the sec function. Output y is of the same size and type
as the input x, (unless x is an integer, in which case y is
a double type).


 Internals

Mathematically, the sec function is defined for all
arguments as
 \[ \sec x \equiv \frac{1}{\cos x}. \]


 Example

The following piece of code plots the real-valued sec(2 pi
x) function over the interval of [-1,1]:

  --> t = linspace(-1,1,1000);
  --> plot(t,sec(2*pi*t))
  --> axis([-1,1,-10,10]);

 secplot.png

* FreeMat_Documentation
* Mathematical_Functions
* Generated on Thu Jul 25 2013 17:17:44 for FreeMat by
  doxygen_ 1.8.1.1

