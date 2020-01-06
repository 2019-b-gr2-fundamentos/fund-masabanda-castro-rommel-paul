main(){
 
  List<String>  gasesNobles;
    gasesNobles = ["helio","neon" ,"argon" ,"kripton","xenon"];



  int operacion;
    do {
      print("BIENVENIDO");
      print("Tenemos el siguiente arreglo $gasesNobles");
      print("Puede realizar la operacion que desee sobre el arreglo");
      print("1-introducir");
      print("2-impimir un elemento del arreglo");   
      print("3-eliminar");
      print("4-salir");

      stdout.write("Digite el numero de operacion que desea realizar:");
      operacion = int.parse(stdin.readLineSync());

      if (operacion >=1 && operacion <= 3 ) {
        switch (operacion) {
          
          case 1:
          
          int ubicarAlRadon;
          stdout.write("Seleccione la posicion de 0 a 5 en la que desee agregar al radon");
          ubicarAlRadon = int.parse(stdin.readLineSync());
    
          gasesNobles.insert(ubicarAlRadon, "radon");
          print(gasesNobles);


            break;
          
          case 2:
          int imprimirElemento;
          stdout.write("Digite el indice del elemento que desea imprimir:");
          imprimirElemento = int.parse(stdin.readLineSync());
          print(gasesNobles[imprimirElemento]);

            break;

          case 3:

          int eliminarElementos;
          stdout.write("Digite el indice del elemento que desea eliminar:");
          eliminarElementos = int.parse(stdin.readLineSync());
            gasesNobles.removeAt(eliminarElementos);
            print(gasesNobles);

            break;
          default:

          print("incorrecto");
        }
        
      } else {
        if (operacion == 4) {
          print("Hasta la proxima :)");        
        }
      } 
        } while (operacion <=1 && operacion <=3 );           
  }
// No es mucho pero es trabajo honesto. 

  







