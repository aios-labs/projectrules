---
description: "Guidelines for who"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Variables","Inspection","Programming","FreeMat","Documentation"]
__meta__rate: 7
---

 Usage

Reports information on either all variables in the current
context or on a specified set of variables. For each
variable, the who function indicates the size and type of
the variable as well as if it is a global or persistent.
There are two formats for the function call. The first is
the explicit form, in which a list of variables are
provided:

    who a1 a2 ...

In the second form

    who

the who function lists all variables defined in the current
context (as well as global and persistent variables). Note
that there are two alternate forms for calling the who
function:

    who 'a1' 'a2' ...

and

    who('a1','a2',...)



 Example

Here is an example of the general use of who, which lists
all of the variables defined.

  --> c = [1,2,3];
  --> f = 'hello';
  --> p = randn(1,256);
  --> who
    Variable Name       Type   Flags             Size
                c    double                    [1x3]
                f      char                    [1x5]
                p    double                    [1x256]

In the second case, we examine only a specific variable:

  --> who c
    Variable Name       Type   Flags             Size
                c    double                    [1x3]
  --> who('c')
    Variable Name       Type   Flags             Size
                c    double                    [1x3]


* FreeMat_Documentation
* Inspection_Functions
* Generated on Thu Jul 25 2013 17:17:38 for FreeMat by
  doxygen_ 1.8.1.1

