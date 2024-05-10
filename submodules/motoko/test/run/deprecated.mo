module A {
  /// @deprecated do not use foo anymore
  public let foo = 5;
  /// @deprecated deprecated function
  public func f(x : Nat) : Nat { x };
  /// @deprecated also types
  public type T = Int;

  public let baz : T = 5; // look, no warning
};

module B { public let foo = 6 };

ignore (A.foo);
assert (A.foo == 5);

ignore(A.f);
ignore(A.f(5));
assert(A.f(5) == 5);

ignore (5 : A.T);

do { let {f} = A; };
do { let {f = x} = A; };
do { let {} = A; };


// lub does not warn:
assert ((if true A else B).foo == 5);
assert ((if false A else B).foo == 6);

// type annotation removes warning
assert ((A : module { foo : Int }).foo == 5);
