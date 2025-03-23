---
description: "Guidelines for lu"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Matrix Decomposition","Linear Algebra","Sparse Matrices","Dense Matrices","Numerical Computing"]
__meta__rate: 7
---

 Usage

Computes the LU decomposition for a matrix. The form of the
command depends on the type of the argument. For full (non-
sparse) matrices, the primary form for lu is

     [L,U,P] = lu(A),

where L is lower triangular, U is upper triangular, and P is
a permutation matrix such that L*U = P*A. The second form is

     [V,U] = lu(A),

where V is P'*L (a row-permuted lower triangular matrix),
and U is upper triangular. For sparse, square matrices, the
LU decomposition has the following form:

     [L,U,P,Q,R] = lu(A),

where A is a sparse matrix of either double or dcomplex
type. The matrices are such that L*U=P*R*A*Q, where L is a
lower triangular matrix, U is upper triangular, P and Q are
permutation vectors and R is a diagonal matrix of row
scaling factors. The decomposition is computed using UMFPACK
for sparse matrices, and LAPACK for dense matrices.


 Example

First, we compute the LU decomposition of a dense matrix.

  --> a = float([1,2,3;4,5,8;10,12,3])

  a =
    1  2  3
    4  5  8
   10 12  3

  --> [l,u,p] = lu(a)
  l =
      1.0000         0         0
      0.1000    1.0000         0
      0.4000    0.2500    1.0000

  u =
     10.0000   12.0000    3.0000
           0    0.8000    2.7000
           0         0    6.1250

  p =
   0 0 1
   1 0 0
   0 1 0

  --> l*u

  ans =
   10 12  3
    1  2  3
    4  5  8

  --> p*a

  ans =
   10 12  3
    1  2  3
    4  5  8

Now we repeat the exercise with a sparse matrix, and
demonstrate the use of the permutation vectors.

  --> a = sparse([1,0,0,4;3,2,0,0;0,0,0,1;4,3,2,4])

  a =
   1 1 1
   2 1 3
   4 1 4
   2 2 2
   4 2 3
   4 3 2
   1 4 4
   3 4 1
   4 4 4
  --> [l,u,p,q,r] = lu(a)
  l =
   1 1 1
   2 2 1
   3 3 1
   4 4 1
  u =
   1 1 0.153846
   1 2 0.230769
   2 2 0.4
   1 3 0.307692
   2 3 0.6
   3 3 0.2
   1 4 0.307692
   3 4 0.8
   4 4 1
  p =
   4
   2
   1
   3

  q =
   3
   2
   1
   4

  r =
   1 1 0.2
   2 2 0.2
   3 3 1
   4 4 0.0769231
  --> full(l*a)

  ans =
   1 0 0 4
   3 2 0 0
   0 0 0 1
   4 3 2 4

  --> b = r*a

  b =
   1 1 0.2
   2 1 0.6
   3 1 0
   4 1 0.307692
   1 2 0
   2 2 0.4
   3 2 0
   4 2 0.230769
   1 3 0
   2 3 0
   3 3 0
   4 3 0.153846
   1 4 0.8
   2 4 0
   3 4 1
   4 4 0.307692
  --> full(b(p,q))

  ans =
      0.1538    0.2308    0.3077    0.3077
           0    0.4000    0.6000         0
           0         0    0.2000    0.8000
           0         0         0    1.0000


* FreeMat_Documentation
* Transforms/Decompositions
* Generated on Thu Jul 25 2013 17:18:29 for FreeMat by
  doxygen_ 1.8.1.1

