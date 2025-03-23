---
description: "Guidelines for eig"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Matrix Computation","Linear Algebra","Eigenvalues","Eigendecomposition","Mathematics"]
__meta__rate: 7
---

 Usage

Computes the eigendecomposition of a square matrix. The eig
function has several forms. The first returns only the
eigenvalues of the matrix:

    s = eig(A)

The second form returns both the eigenvectors and
eigenvalues as two matrices (the eigenvalues are stored in a
diagonal matrix):

    [V,D] = eig(A)

where D is the diagonal matrix of eigenvalues, and V is the
matrix of eigenvectors.
Eigenvalues and eigenvectors for asymmetric matrices A
normally are computed with balancing applied. Balancing is a
scaling step that normaly improves the quality of the
eigenvalues and eigenvectors. In some instances (see the
Function Internals section for more details) it is necessary
to disable balancing. For these cases, two additional forms
of eig are available:

    s = eig(A,'nobalance'),

which computes the eigenvalues of A only, and does not
balance the matrix prior to computation. Similarly,

    [V,D] = eig(A,'nobalance')

recovers both the eigenvectors and eigenvalues of A without
balancing. Note that the 'nobalance' option has no affect on
symmetric matrices.
FreeMat also provides the ability to calculate generalized
eigenvalues and eigenvectors. Similarly to the regular case,
there are two forms for eig when computing generalized
eigenvector (see the Function Internals section for a
description of what a generalized eigenvector is). The first
returns only the generalized eigenvalues of the matrix pair
A,B

    s = eig(A,B)

The second form also computes the generalized eigenvectors,
and is accessible via

    [V,D] = eig(A,B)



 Internals

Recall that v is an eigenvector of A with associated
eigenvalue d if
 \[ A v = d v. \]
This decomposition can be written in matrix form as
 \[ A V = V D \]
where
 \[ V = [v_1,v_2,\ldots,v_n], D = \mathrm{diag}
(d_1,d_2,\ldots,d_n). \]
The eig function uses the LAPACK class of functions GEEVX to
compute the eigenvalue decomposition for non-symmetric (or
non-Hermitian) matrices A. For symmetric matrices, SSYEV and
DSYEV are used for float and double matrices (respectively).
For Hermitian matrices, CHEEV and ZHEEV are used for complex
and dcomplex matrices.
For some matrices, the process of balancing (in which the
rows and columns of the matrix are pre-scaled to facilitate
the search for eigenvalues) is detrimental to the quality of
the final solution. This is particularly true if the matrix
contains some elements on the order of round off error. See
the Example section for an example.
A generalized eigenvector of the matrix pair A,B is simply a
vector v with associated eigenvalue d such that
 \[ A v = d B v, \]
where B is a square matrix of the same size as A. This
decomposition can be written in matrix form as
 \[ A V = B V D \]
where
 \[ V = [v_1,v_2,\ldots,v_n], D = \mathrm{diag}
(d_1,d_2,\ldots,d_n). \]
For general matrices A and B, the GGEV class of routines are
used to compute the generalized eigendecomposition. If
howevever, A and B are both symmetric (or Hermitian, as
appropriate), Then FreeMat first attempts to use SSYGV and
DSYGV for float and double arguments and CHEGV and ZHEGV for
complex and dcomplex arguments (respectively). These
routines requires that B also be positive definite, and if
it fails to be, FreeMat will revert to the routines used for
general arguments.


 Example

Some examples of eigenvalue decompositions. First, for a
diagonal matrix, the eigenvalues are the diagonal elements
of the matrix.

  --> A = diag([1.02f,3.04f,1.53f])

  A =
      1.0200         0         0
           0    3.0400         0
           0         0    1.5300

  --> eig(A)

  ans =
      1.0200
      1.5300
      3.0400

Next, we compute the eigenvalues of an upper triangular
matrix, where the eigenvalues are again the diagonal
elements.

  --> A = [1.0f,3.0f,4.0f;0,2.0f,6.7f;0.0f,0.0f,1.0f]

  A =
      1.0000    3.0000    4.0000
           0    2.0000    6.7000
           0         0    1.0000

  --> eig(A)

  ans =
   1
   2
   1

Next, we compute the complete eigenvalue decomposition of a
random matrix, and then demonstrate the accuracy of the
solution

  --> A = float(randn(2))

  A =
      0.3747   -1.5129
     -0.6283   -1.1096

  --> [V,D] = eig(A)
  V =
      0.9526    0.6096
     -0.3042    0.7927

  D =
      0.8578         0
           0   -1.5928

  --> A*V - V*D

  ans =

     1.0e-08 *
     -5.9605         0
     -2.9802         0

Now, we consider a matrix that requires the nobalance option
to compute the eigenvalues and eigenvectors properly. Here
is an example from MATLAB's manual.

  --> B = [3,-2,-.9,2*eps;-2,4,1,-eps;-eps/4,eps/2,-
  1,0;-.5,-.5,.1,1]

  B =
      3.0000   -2.0000   -0.9000    0.0000
     -2.0000    4.0000    1.0000   -0.0000
     -0.0000    0.0000   -1.0000         0
     -0.5000   -0.5000    0.1000    1.0000

  --> [VB,DB] = eig(B)
  VB =
      0.6153   -0.4176   -0.0000   -0.1495
     -0.7881   -0.3261   -0.0000    0.1316
     -0.0000   -0.0000    0.0000   -0.9570
      0.0189    0.8481    1.0000   -0.2110

  DB =
      5.5616         0         0         0
           0    1.4384         0         0
           0         0    1.0000         0
           0         0         0   -1.0000

  --> B*VB - VB*DB

  ans =
           0         0    0.0000   -0.0000
           0    0.0000   -0.0000    0.0000
     -0.0000   -0.0000   -0.0000   -0.0000
      0.0000    0.0000    0.0000   -0.5088

  --> [VN,DN] = eig(B,'nobalance')
  VN =
      0.6153   -0.4176   -0.0000   -0.1528
     -0.7881   -0.3261         0    0.1345
     -0.0000   -0.0000   -0.0000   -0.9781
      0.0189    0.8481   -1.0000    0.0443

  DN =
      5.5616         0         0         0
           0    1.4384         0         0
           0         0    1.0000         0
           0         0         0   -1.0000

  --> B*VN - VN*DN

  ans =

     1.0e-15 *
     -1.7764   -0.1110   -0.5587   -0.1665
      3.5527    1.0547    0.3364   -0.1943
      0.0172    0.0015    0.0066         0
      0.1527   -0.2220    0.2220    0.0833


* FreeMat_Documentation
* Transforms/Decompositions
* Generated on Thu Jul 25 2013 17:18:29 for FreeMat by
  doxygen_ 1.8.1.1

