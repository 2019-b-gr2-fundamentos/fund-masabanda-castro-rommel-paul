import 'dart:io';

main(){
  
    
  
    
 
  List<String>  gasesNobles;
  gasesNobles = ["helio","neon" ,"argon" ,"kripton" ];
  int operacion;
   do {

    print("BIENVENIDO");
    print("Observemos el siguiente arreglo $gasesNobles");
    print("Puede realizar la operacion que desee sobre el arreglo");
    print("1-crear");   
    print("2-eliminar");
    print("3-salir");
    stdout.write("Digite el numero de operacion que desea realizar:");
    operacion = int.parse(stdin.readLineSync());
    if (operacion >=1 && operacion <= 2 ) {
      switch (operacion) {
        case 1:
        gasesNobles.add("xenon");
        print(gasesNobles);
          break;

        case 2:
        gasesNobles.removeLast();


          break;

       

        default:
        print("incorrecto");
      }
      
     // No es mucho pero es trabajo honesto 
      
    } else {
      if (operacion == 3) {
        print("Nos vemos ");
        
      }

      } 

      } while (operacion == 1 || operacion ==2 );
      

    
}


 
    

 
    
  
  
 
  
  


  

































