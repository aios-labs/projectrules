---
description: "Guidelines for sin"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Numerical Computing","Trigonometry","Programming","Scientific Computing"]
__meta__rate: 7
---

 Usage

Computes the sin function for its argument. The general
syntax for its use is

    y = sin(x)

where x is an n-dimensional array of numerical type. Integer
types are promoted to the double type prior to calculation
of the sin function. Output y is of the same size and type
as the input x, (unless x is an integer, in which case y is
a double type).


 Internals

Mathematically, the sin function is defined for all real
valued arguments x by the infinite summation
 \[ \sin x \equiv \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^
{2n-1}}{(2n-1)!}. \]
For complex valued arguments z, the sine is computed via
 \[ \sin z \equiv \sin \Re z \cosh \Im z - i \cos \Re z
\sinh \Im z. \]


 Example

The following piece of code plots the real-valued sin(2 pi
x) function over one period of [0,1]:

  --> x = linspace(0,1);
  --> plot(x,sin(2*pi*x))

 sinplot.png

* FreeMat_Documentation
* Mathematical_Functions
* Generated on Thu Jul 25 2013 17:17:45 for FreeMat by
  doxygen_ 1.8.1.1

