---
description: "Guidelines for inv"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Matrix Operations","Mathematics","Linear Algebra","FreeMat","Sparse Matrices"]
__meta__rate: 7
---

 Usage

Inverts the argument matrix, provided it is square and
invertible. The syntax for its use is

     y = inv(x)

Internally, the inv function uses the matrix divide
operators. For sparse matrices, a sparse matrix solver is
used.


 Example

Here we invert some simple matrices

  --> a = randi(zeros(3),5*ones(3))

  a =
   5 3 3
   4 1 3
   5 2 5

  --> b = inv(a)

  b =
      0.0909    0.8182   -0.5455
      0.4545   -0.9091    0.2727
     -0.2727   -0.4545    0.6364

  --> a*b

  ans =
      1.0000    0.0000   -0.0000
      0.0000    1.0000         0
      0.0000    0.0000    1.0000

  --> b*a

  ans =
      1.0000    0.0000         0
      0.0000    1.0000         0
      0.0000   -0.0000    1.0000


* FreeMat_Documentation
* Transforms/Decompositions
* Generated on Thu Jul 25 2013 17:18:29 for FreeMat by
  doxygen_ 1.8.1.1

