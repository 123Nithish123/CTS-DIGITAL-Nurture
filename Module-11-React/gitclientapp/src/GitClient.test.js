import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {

  test('should return repository names for techiesyed', async () => {
    const mockRepos = [
      { name: 'react-project' },
      { name: 'node-app' },
      { name: 'python-scripts' }
    ];

    axios.get.mockResolvedValue({ data: mockRepos });

    const repos = await GitClient.getRepositories('techiesyed');

    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
    expect(repos).toEqual(['react-project', 'node-app', 'python-scripts']);
  });

});