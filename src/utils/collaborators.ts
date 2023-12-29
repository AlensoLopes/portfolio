export interface Collaborators{
  login: string;
  avatar_url: string | undefined;
  html_url: string;
}

export async function getCollaborators()
  : Promise<Collaborators[]> {
  return proccessCollaboratorData(new Array<Collaborators>());
//   const url =
//     `https://api.github.com/repos/${owner}/${repo}/collaborators`;
//   const response : Response = await fetch(url, {
//     headers: {
//       Authorization: `token ${process.env.REACT_APP_API_GITHUB}`
//     }
//   });
//   const data : Collaborators[] = await response.json();
//   return proccessCollaboratorData(data);
}

function proccessCollaboratorData(collaborators : Collaborators[])
  : Collaborators[]{
  const processedCollaborators : Collaborators[]
  = collaborators.map((collaborator) => {
    return {
      login: collaborator.login,
      avatar_url: collaborator.avatar_url,
      html_url: collaborator.html_url
    };
  });
  return processedCollaborators;
}
