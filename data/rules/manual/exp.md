---
description: "Guidelines for exp"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Numerical Computing","Exponential Function","Complex Numbers","Plotting"]
__meta__rate: 7
---

 Usage

Computes the exp function for its argument. The general
syntax for its use is

     y = exp(x)

where x is an n-dimensional array of numerical type. Integer
types are promoted to the double type prior to calculation
of the exp function. Output y is of the same size and type
as the input x, (unless x is an integer, in which case y is
a double type).


 Internals

Mathematically, the exp function is defined for all real
valued arguments x as
 \[ \exp x \equiv e^{x}, \]
where
 \[ e = \sum_{0}^{\infty} \frac{1}{k!} \]
and is approximately 2.718281828459045 (returned by the
function e). For complex values z, the famous Euler formula
is used to calculate the exponential
 \[ e^{z} = e^{|z|} \left[ \cos \Re z + i \sin \Re z \right]
\]


 Example

The following piece of code plots the real-valued exp
function over the interval [-1,1]:

  --> x = linspace(-1,1);
  --> plot(x,exp(x))

 expplot1.png
In the second example, we plot the unit circle in the
complex plane e^{i 2 pi x} for x in [-1,1].

  --> x = linspace(-1,1);
  --> plot(exp(-i*x*2*pi))

 expplot2.png

* FreeMat_Documentation
* Mathematical_Functions
* Generated on Thu Jul 25 2013 17:17:43 for FreeMat by
  doxygen_ 1.8.1.1

