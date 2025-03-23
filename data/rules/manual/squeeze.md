---
description: "Guidelines for squeeze"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Array Manipulation","Multidimensional Arrays","Data Processing"]
__meta__rate: 7
---

 Usage

This function removes the singleton dimensions of an array.
The syntax for its use is

     y = squeeze(x)

where x is a multidimensional array. Generally speaking, if
x is of size d1 x 1 x d2 x ..., then squeeze(x) is of size
d1 x d2 x ..., i.e., each dimension of x that was singular
(size 1) is squeezed out.


 Example

Here is a many dimensioned, ungainly array, both before and
after squeezing;

  --> x = zeros(1,4,3,1,1,2);
  --> size(x)

  ans =
   1 4 3 1 1 2

  --> y = squeeze(x);
  --> size(y)

  ans =
   4 3 2


* FreeMat_Documentation
* Array_Generation_and_Manipulations
* Generated on Thu Jul 25 2013 17:17:13 for FreeMat by
  doxygen_ 1.8.1.1

