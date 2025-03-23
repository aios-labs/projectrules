---
description: "Guidelines for cos"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Numerical Computing","Cosine Function","FreeMat","Mathematical Functions"]
__meta__rate: 7
---

 Usage

Computes the cos function for its argument. The general
syntax for its use is

    y = cos(x)

where x is an n-dimensional array of numerical type. Integer
types are promoted to the double type prior to calculation
of the cos function. Output y is of the same size and type
as the input x, (unless x is an integer, in which case y is
a double type).


 Internals

Mathematically, the cos function is defined for all real
valued arguments x by the infinite summation
 \[ \cos x \equiv \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{
(2n)!}. \]
For complex valued arguments z, the cosine is computed via
 \[ \cos z \equiv \cos \Re z \cosh \Im z - \sin \Re z \sinh
\Im z. \]


 Example

The following piece of code plots the real-valued cos(2 pi
x) function over one period of [0,1]:

  --> x = linspace(0,1);
  --> plot(x,cos(2*pi*x))

 cosplot.png

* FreeMat_Documentation
* Mathematical_Functions
* Generated on Thu Jul 25 2013 17:17:41 for FreeMat by
  doxygen_ 1.8.1.1

