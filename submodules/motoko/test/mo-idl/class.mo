import L "import/List";
actor class A(init : L.List<Nat>) {
    var list = init;
    public func get() : async L.List<Int> { list };
};
