 function validar(frm) {
      frm.sub.disabled = true;
      for (i=0; i<4; i++)
        if (frm['txt'+i].value =='') return
      frm.sub.disabled = false;
    }