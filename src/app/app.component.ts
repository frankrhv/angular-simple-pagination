import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  paginatorSize = 10;
  images = [
    {
      title: 'At the Beatch',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Las Vegas',
      url: 'https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id614973464?b=1&k=20&m=614973464&s=170667a&w=0&h=72lHkgF5EikOyqh7LHg3waf8rLmVILMFONNqVUq7faA=',
    },
    {
      title: 'Formula 1',
      url: 'https://images.unsplash.com/photo-1630446838167-4f63bc82e1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm11bGElMjAxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Iquitos',
      url: 'https://media.istockphoto.com/photos/amazon-jungle-village-picture-id490998888?b=1&k=20&m=490998888&s=170667a&w=0&h=NKiQ6_L_dQMUJs7fqkBqAO9iJm-ReofZXIMGu_P_Wog=',
    },
    {
      title: 'Iguazu falls',
      url: 'https://media.istockphoto.com/photos/iguazu-falls-on-the-border-of-argentina-and-brazil-picture-id496540104?k=20&m=496540104&s=612x612&w=0&h=cL56R3U-0XPLIIgf6R4pQQrXVTxh_TdY1Oo0uMhQNBk=',
    },
    {
      title: 'Machu Picchu',
      url: 'https://media.istockphoto.com/photos/machu-picchu-inca-ruins-picture-id1339071089?k=20&m=1339071089&s=612x612&w=0&h=MxXqhf4YAFBpbov6m8_hpSOvS6RXbnabY9JpGsZyH10=',
    },
    {
      title: 'Cartagena',
      url: 'https://media.istockphoto.com/photos/beautiful-sunset-over-cartagena-colombia-picture-id1148861090?b=1&k=20&m=1148861090&s=170667a&w=0&h=jvSwP_1UKuPVbVGtGx-0MYi1DFDUs5X8FUzcB7JFOLA=',
    },
    {
      title: 'Niza',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/1200px-Nizza-C%C3%B4te_d%27Azur.jpg',
    },
    {
      title: 'At the Beatch',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Las Vegas',
      url: 'https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id614973464?b=1&k=20&m=614973464&s=170667a&w=0&h=72lHkgF5EikOyqh7LHg3waf8rLmVILMFONNqVUq7faA=',
    },
    {
      title: 'Formula 1',
      url: 'https://images.unsplash.com/photo-1630446838167-4f63bc82e1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm11bGElMjAxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Iquitos',
      url: 'https://media.istockphoto.com/photos/amazon-jungle-village-picture-id490998888?b=1&k=20&m=490998888&s=170667a&w=0&h=NKiQ6_L_dQMUJs7fqkBqAO9iJm-ReofZXIMGu_P_Wog=',
    },
    {
      title: 'Iguazu falls',
      url: 'https://media.istockphoto.com/photos/iguazu-falls-on-the-border-of-argentina-and-brazil-picture-id496540104?k=20&m=496540104&s=612x612&w=0&h=cL56R3U-0XPLIIgf6R4pQQrXVTxh_TdY1Oo0uMhQNBk=',
    },
    {
      title: 'Machu Picchu',
      url: 'https://media.istockphoto.com/photos/machu-picchu-inca-ruins-picture-id1339071089?k=20&m=1339071089&s=612x612&w=0&h=MxXqhf4YAFBpbov6m8_hpSOvS6RXbnabY9JpGsZyH10=',
    },
    {
      title: 'Cartagena',
      url: 'https://media.istockphoto.com/photos/beautiful-sunset-over-cartagena-colombia-picture-id1148861090?b=1&k=20&m=1148861090&s=170667a&w=0&h=jvSwP_1UKuPVbVGtGx-0MYi1DFDUs5X8FUzcB7JFOLA=',
    },
    {
      title: 'Niza',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/1200px-Nizza-C%C3%B4te_d%27Azur.jpg',
    },
    {
      title: 'At the Beatch',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Las Vegas',
      url: 'https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id614973464?b=1&k=20&m=614973464&s=170667a&w=0&h=72lHkgF5EikOyqh7LHg3waf8rLmVILMFONNqVUq7faA=',
    },
    {
      title: 'Formula 1',
      url: 'https://images.unsplash.com/photo-1630446838167-4f63bc82e1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm11bGElMjAxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Iquitos',
      url: 'https://media.istockphoto.com/photos/amazon-jungle-village-picture-id490998888?b=1&k=20&m=490998888&s=170667a&w=0&h=NKiQ6_L_dQMUJs7fqkBqAO9iJm-ReofZXIMGu_P_Wog=',
    },
    {
      title: 'Iguazu falls',
      url: 'https://media.istockphoto.com/photos/iguazu-falls-on-the-border-of-argentina-and-brazil-picture-id496540104?k=20&m=496540104&s=612x612&w=0&h=cL56R3U-0XPLIIgf6R4pQQrXVTxh_TdY1Oo0uMhQNBk=',
    },
    {
      title: 'Machu Picchu',
      url: 'https://media.istockphoto.com/photos/machu-picchu-inca-ruins-picture-id1339071089?k=20&m=1339071089&s=612x612&w=0&h=MxXqhf4YAFBpbov6m8_hpSOvS6RXbnabY9JpGsZyH10=',
    },
    {
      title: 'Cartagena',
      url: 'https://media.istockphoto.com/photos/beautiful-sunset-over-cartagena-colombia-picture-id1148861090?b=1&k=20&m=1148861090&s=170667a&w=0&h=jvSwP_1UKuPVbVGtGx-0MYi1DFDUs5X8FUzcB7JFOLA=',
    },
    {
      title: 'Niza',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/1200px-Nizza-C%C3%B4te_d%27Azur.jpg',
    },
    {
      title: 'At the Beatch',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Las Vegas',
      url: 'https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id614973464?b=1&k=20&m=614973464&s=170667a&w=0&h=72lHkgF5EikOyqh7LHg3waf8rLmVILMFONNqVUq7faA=',
    },
    {
      title: 'Formula 1',
      url: 'https://images.unsplash.com/photo-1630446838167-4f63bc82e1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm11bGElMjAxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Iquitos',
      url: 'https://media.istockphoto.com/photos/amazon-jungle-village-picture-id490998888?b=1&k=20&m=490998888&s=170667a&w=0&h=NKiQ6_L_dQMUJs7fqkBqAO9iJm-ReofZXIMGu_P_Wog=',
    },
    {
      title: 'Iguazu falls',
      url: 'https://media.istockphoto.com/photos/iguazu-falls-on-the-border-of-argentina-and-brazil-picture-id496540104?k=20&m=496540104&s=612x612&w=0&h=cL56R3U-0XPLIIgf6R4pQQrXVTxh_TdY1Oo0uMhQNBk=',
    },
    {
      title: 'Machu Picchu',
      url: 'https://media.istockphoto.com/photos/machu-picchu-inca-ruins-picture-id1339071089?k=20&m=1339071089&s=612x612&w=0&h=MxXqhf4YAFBpbov6m8_hpSOvS6RXbnabY9JpGsZyH10=',
    },
    {
      title: 'Cartagena',
      url: 'https://media.istockphoto.com/photos/beautiful-sunset-over-cartagena-colombia-picture-id1148861090?b=1&k=20&m=1148861090&s=170667a&w=0&h=jvSwP_1UKuPVbVGtGx-0MYi1DFDUs5X8FUzcB7JFOLA=',
    },
    {
      title: 'Niza',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/1200px-Nizza-C%C3%B4te_d%27Azur.jpg',
    },
    {
      title: 'At the Beatch',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Las Vegas',
      url: 'https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id614973464?b=1&k=20&m=614973464&s=170667a&w=0&h=72lHkgF5EikOyqh7LHg3waf8rLmVILMFONNqVUq7faA=',
    },
    {
      title: 'Formula 1',
      url: 'https://images.unsplash.com/photo-1630446838167-4f63bc82e1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm11bGElMjAxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Iquitos',
      url: 'https://media.istockphoto.com/photos/amazon-jungle-village-picture-id490998888?b=1&k=20&m=490998888&s=170667a&w=0&h=NKiQ6_L_dQMUJs7fqkBqAO9iJm-ReofZXIMGu_P_Wog=',
    },
    {
      title: 'Iguazu falls',
      url: 'https://media.istockphoto.com/photos/iguazu-falls-on-the-border-of-argentina-and-brazil-picture-id496540104?k=20&m=496540104&s=612x612&w=0&h=cL56R3U-0XPLIIgf6R4pQQrXVTxh_TdY1Oo0uMhQNBk=',
    },
    {
      title: 'Machu Picchu',
      url: 'https://media.istockphoto.com/photos/machu-picchu-inca-ruins-picture-id1339071089?k=20&m=1339071089&s=612x612&w=0&h=MxXqhf4YAFBpbov6m8_hpSOvS6RXbnabY9JpGsZyH10=',
    },
    {
      title: 'Cartagena',
      url: 'https://media.istockphoto.com/photos/beautiful-sunset-over-cartagena-colombia-picture-id1148861090?b=1&k=20&m=1148861090&s=170667a&w=0&h=jvSwP_1UKuPVbVGtGx-0MYi1DFDUs5X8FUzcB7JFOLA=',
    },
    {
      title: 'Niza',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/1200px-Nizza-C%C3%B4te_d%27Azur.jpg',
    },
    {
      title: 'At the Beatch',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Las Vegas',
      url: 'https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id614973464?b=1&k=20&m=614973464&s=170667a&w=0&h=72lHkgF5EikOyqh7LHg3waf8rLmVILMFONNqVUq7faA=',
    },
    {
      title: 'Formula 1',
      url: 'https://images.unsplash.com/photo-1630446838167-4f63bc82e1cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm11bGElMjAxfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Iquitos',
      url: 'https://media.istockphoto.com/photos/amazon-jungle-village-picture-id490998888?b=1&k=20&m=490998888&s=170667a&w=0&h=NKiQ6_L_dQMUJs7fqkBqAO9iJm-ReofZXIMGu_P_Wog=',
    },
    {
      title: 'Iguazu falls',
      url: 'https://media.istockphoto.com/photos/iguazu-falls-on-the-border-of-argentina-and-brazil-picture-id496540104?k=20&m=496540104&s=612x612&w=0&h=cL56R3U-0XPLIIgf6R4pQQrXVTxh_TdY1Oo0uMhQNBk=',
    },
    {
      title: 'Machu Picchu',
      url: 'https://media.istockphoto.com/photos/machu-picchu-inca-ruins-picture-id1339071089?k=20&m=1339071089&s=612x612&w=0&h=MxXqhf4YAFBpbov6m8_hpSOvS6RXbnabY9JpGsZyH10=',
    },
    {
      title: 'Cartagena',
      url: 'https://media.istockphoto.com/photos/beautiful-sunset-over-cartagena-colombia-picture-id1148861090?b=1&k=20&m=1148861090&s=170667a&w=0&h=jvSwP_1UKuPVbVGtGx-0MYi1DFDUs5X8FUzcB7JFOLA=',
    },
    {
      title: 'Niza',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/1200px-Nizza-C%C3%B4te_d%27Azur.jpg',
    },
  ];

  checkPagination(index: number) {
    let add = 0;
    if (this.currentPage >= this.paginatorSize) {
      add += this.currentPage - this.paginatorSize + 1;
    }
    return index < this.paginatorSize + add && index >= add;
  }
}
