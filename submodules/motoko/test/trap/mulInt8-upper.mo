let _ = (16 : Int8) * (8 : Int8)
// There should be only one shift per operand
// CHECK: mul<Int8>
// CHECK: i32.shr_s
// CHECK: i32.const 24
// CHECK-NEXT: i32.shr_s
