---
description: "Guidelines for save"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Data Storage","File Format","Machine Independence","FreeMat","MATLAB Compatibility"]
__meta__rate: 7
---

 Usage

Saves a set of variables to a file in a machine independent
format. There are two formats for the function call. The
first is the explicit form, in which a list of variables are
provided to write to the file:

    save filename a1 a2 ...

In the second form,

    save filename

all variables in the current context are written to the
file. The format of the file is a simple binary encoding
(raw) of the data with enough information to restore the
variables with the load command. The endianness of the
machine is encoded in the file, and the resulting file
should be portable between machines of similar types (in
particular, machines that support IEEE floating point
representation).
You can also specify both the filename as a string, in which
case you also have to specify the names of the variables to
save. In particular

     save('filename','a1','a2')

will save variables a1 and a2 to the file.
Starting with version 2.0, FreeMat can also read and write
MAT files (the file format used by MATLAB) thanks to
substantial work by Thomas Beutlich. Support for MAT files
in version 2.1 has improved over previous versions. In
particular, classes should be saved properly, as well as a
broader range of sparse matrices. Compression is supported
for both reading and writing to MAT files. MAT file support
is still in the alpha stages, so please be cautious with
using it to store critical data. The file format is
triggered by the extension. To save files with a MAT format,
simply use a filename with a ".mat" ending.
The save function also supports ASCII output. This is a very
limited form of the save command - it can only save numeric
arrays that are 2-dimensional. This form of the save command
is triggered using

     save -ascii filename var1 var 2

although where -ascii appears on the command line is
arbitrary (provided it comes after the save command, of
course). Be default, the save command uses an 8-digit
exponential format notation to save the values to the file.
You can specify that you want 16-digits using the

     save -ascii -double filename var1 var2

form of the command. Also, by default, save uses spaces as
the delimiters between the entries in the matrix. If you
want tabs instead, you can use

     save -ascii -tabs filename var1 var2

(you can also use both the -tabs and -double flags
simultaneously).
Finally, you can specify that save should only save
variables that match a particular regular expression. Any of
the above forms can be combined with the -regexp flag:

     save filename -regexp pattern1 pattern2

in which case variables that match any of the patterns will
be saved.


 Example

Here is a simple example of save/load. First, we save some
variables to a file.

  --> D = {1,5,'hello'};
  --> s = 'test string';
  --> x = randn(512,1);
  --> z = zeros(512);
  --> who
    Variable Name       Type   Flags             Size
                D      cell                    [1x3]
                s      char                    [1x11]
                x    double                    [512x1]
                z    double                    [512x512]
  --> save loadsave.dat

Next, we clear the variables, and then load them back from
the file.

  --> clear D s x z
  --> who
    Variable Name       Type   Flags             Size
              ans    double                    [0x0]
  --> load loadsave.dat
  --> who
    Variable Name       Type   Flags             Size
                D      cell                    [1x3]
              ans    double                    [0x0]
                s      char                    [1x11]
                x    double                    [512x1]
                z    double                    [512x512]


* FreeMat_Documentation
* Input/Ouput_Functions
* Generated on Thu Jul 25 2013 17:17:39 for FreeMat by
  doxygen_ 1.8.1.1

