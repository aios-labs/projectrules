---
description: "Guidelines for erf"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Error Function","Numerical Computing","FreeMat","Plotting"]
__meta__rate: 7
---

 Usage

Computes the error function for real arguments. The erf
function takes only a single argument

    y = erf(x)

where x is either a float or double array. The output vector
y is the same size (and type) as x.


 Internals

The erf function is defined by the integral:
 \[ \mathrm{erf}(x) = \frac{2}{\sqrt{\pi}}\int_{0}^{x} e^{-
t^2} \, dt, \]
and is the integral of the normal distribution.


 Example

Here is a plot of the erf function over the range [-5,5].

  --> x = linspace(-5,5);
  --> y = erf(x);
  --> plot(x,y); xlabel('x'); ylabel('erf(x)');

which results in the following plot.
 erf1.png

* FreeMat_Documentation
* Mathematical_Functions
* Generated on Thu Jul 25 2013 17:17:42 for FreeMat by
  doxygen_ 1.8.1.1

